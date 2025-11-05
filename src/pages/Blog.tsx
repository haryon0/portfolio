import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from "@/components/portfolio/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { supabase, BlogPost } from "@/lib/supabase";
import { format } from "date-fns";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Network", "Infrastructure", "Security", "VoIP", "Tutorial"];

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
            <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          </div>
          <p className="text-sm text-muted-foreground font-medium">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        <div className="container relative z-10 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5">
              <span>📝 Blog</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-foreground">IT Insights &</span>
              <br />
              <span className="text-gradient">Technical Articles</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagi pengalaman, tips, dan best practices seputar Network Infrastructure, 
              VoIP, Cybersecurity, dan IT Operations.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors bg-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border bg-card/50 sticky top-0 z-40">
        <div className="container px-6">
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`}>
                    <Card className="group overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover-lift h-full flex flex-col">
                      {/* Image */}
                      {post.image_url && (
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={post.image_url} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {post.category && (
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-primary text-primary-foreground">
                                {post.category}
                              </Badge>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6 space-y-4 flex-1 flex flex-col">
                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{format(new Date(post.created_at), 'dd MMM yyyy')}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{calculateReadTime(post.content)} min read</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Description */}
                        {post.description && (
                          <p className="text-muted-foreground line-clamp-3 flex-1">
                            {post.description}
                          </p>
                        )}

                        {/* Read More */}
                        <div className="flex items-center gap-2 text-primary hover:text-primary-hover font-medium pt-2">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto space-y-4">
                  <div className="text-6xl">📝</div>
                  <h3 className="text-2xl font-bold">No Articles Found</h3>
                  <p className="text-muted-foreground">
                    {searchQuery || selectedCategory !== "All" 
                      ? "Try different keywords or category." 
                      : "No published articles yet. Check back soon!"}
                  </p>
                  {(searchQuery || selectedCategory !== "All") && (
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All");
                      }}
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="container px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Subscribe to Newsletter
            </h2>
            <p className="text-primary-foreground/80">
              Dapatkan update artikel terbaru dan tips IT langsung ke inbox Anda.
            </p>
            
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg outline-none"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/60">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container px-6">
          <div className="text-center space-y-4">
            <p className="text-sm">© 2024 Haryono. All rights reserved.</p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <Link to="/#contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
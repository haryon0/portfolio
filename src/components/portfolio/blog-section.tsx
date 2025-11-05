import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase, BlogPost } from "@/lib/supabase";
import { format } from "date-fns";

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section id="blog" className="py-24 bg-gradient-secondary">
        <div className="container px-6 text-center">
          <p>Loading blog posts...</p>
        </div>
      </section>
    );
  }

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 bg-gradient-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <Badge 
              variant="outline" 
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5"
            >
              <span>📝 Blog</span>
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Latest</span>{" "}
              <span className="text-gradient">Articles</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagi pengalaman dan insights seputar IT Infrastructure, 
              Network, dan Technology.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card className="group overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover-lift h-full">
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
                  <div className="p-6 space-y-4">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(post.created_at), 'dd MMM yyyy')}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Description */}
                    {post.description && (
                      <p className="text-muted-foreground line-clamp-2">
                        {post.description}
                      </p>
                    )}

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-primary hover:text-primary-hover font-medium">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
              <Link to="/blog">
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
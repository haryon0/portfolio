import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from "@/components/portfolio/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { supabase, BlogPost as BlogPostType } from "@/lib/supabase";
import { format } from "date-fns";
import toast from 'react-hot-toast';

export function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  async function fetchPost(slug: string) {
    try {
      // Fetch post
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (error) throw error;
      
      setPost(data);

      // Increment views
      if (data) {
        await supabase
          .from('blog_posts')
          .update({ views: data.views + 1 })
          .eq('id', data.id);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      toast.error('Article not found');
    } finally {
      setLoading(false);
    }
  }

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        });
      } catch (error) {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Article Not Found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="py-24">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>

            {/* Header */}
            <header className="mb-12 space-y-6">
              {/* Category */}
              {post.category && (
                <Badge className="bg-primary text-primary-foreground">
                  {post.category}
                </Badge>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {post.title}
              </h1>

              {/* Description */}
              {post.description && (
                <p className="text-xl text-muted-foreground">
                  {post.description}
                </p>
              )}

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{format(new Date(post.created_at), 'dd MMMM yyyy')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{Math.ceil(post.content.split(' ').length / 200)} min read</span>
                </div>
                <div>
                  By <span className="font-medium text-foreground">{post.author}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleShare}
                  className="ml-auto"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            {post.image_url && (
              <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
                <img 
                  src={post.image_url} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-foreground 
                prose-p:text-muted-foreground
                prose-a:text-primary hover:prose-a:text-primary-hover
                prose-strong:text-foreground
                prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:rounded
                prose-pre:bg-muted prose-pre:text-foreground
                prose-img:rounded-xl
                prose-hr:border-border"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Written by</p>
                  <p className="font-semibold text-foreground">{post.author}</p>
                </div>
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
}
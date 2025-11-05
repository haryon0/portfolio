import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase, BlogPost } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  LogOut,
  BarChart3
} from 'lucide-react';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

export function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    fetchPosts();
  }, []);

  async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate('/admin/login');
    } else {
      setUser(user);
    }
  }

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  }

  async function togglePublish(id: string, currentStatus: boolean) {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ 
          published: !currentStatus,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) throw error;

      toast.success(currentStatus ? 'Post unpublished' : 'Post published');
      fetchPosts();
    } catch (error) {
      toast.error('Failed to update post');
    }
  }

  async function deletePost(id: string, title: string) {
    if (!confirm(`Delete "${title}"?`)) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast.success('Post deleted');
      fetchPosts();
    } catch (error) {
      toast.error('Failed to delete post');
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate('/admin/login');
  }

  const stats = {
    total: posts.length,
    published: posts.filter(p => p.published).length,
    draft: posts.filter(p => !p.published).length,
    totalViews: posts.reduce((sum, p) => sum + p.views, 0),
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Blog Admin</h1>
              <p className="text-sm text-muted-foreground">
                Welcome back, {user?.email}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline">
                <Link to="/">View Site</Link>
              </Button>
              <Button onClick={handleLogout} variant="ghost">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Posts</p>
                <p className="text-3xl font-bold text-gradient">{stats.total}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Published</p>
                <p className="text-3xl font-bold text-green-600">{stats.published}</p>
              </div>
              <Eye className="w-8 h-8 text-green-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Drafts</p>
                <p className="text-3xl font-bold text-orange-600">{stats.draft}</p>
              </div>
              <EyeOff className="w-8 h-8 text-orange-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Views</p>
                <p className="text-3xl font-bold text-primary">{stats.totalViews}</p>
              </div>
              <Eye className="w-8 h-8 text-primary" />
            </div>
          </Card>
        </div>
      </section>

      {/* Posts List */}
      <section className="container mx-auto px-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">All Posts</h2>
          <Button asChild>
            <Link to="/admin/create">
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Link>
          </Button>
        </div>

        <div className="space-y-4">
          {posts.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground mb-4">No posts yet</p>
              <Button asChild>
                <Link to="/admin/create">Create First Post</Link>
              </Button>
            </Card>
          ) : (
            posts.map((post) => (
              <Card key={post.id} className="p-6 hover:shadow-professional transition-all">
                <div className="flex items-start gap-6">
                  {/* Image */}
                  {post.image_url && (
                    <img 
                      src={post.image_url} 
                      alt={post.title}
                      className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {post.title}
                          </h3>
                          <Badge variant={post.published ? "default" : "secondary"}>
                            {post.published ? 'Published' : 'Draft'}
                          </Badge>
                        </div>
                        {post.description && (
                          <p className="text-muted-foreground line-clamp-2">
                            {post.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{format(new Date(post.created_at), 'dd MMM yyyy')}</span>
                      {post.category && <span>• {post.category}</span>}
                      <span>• {post.views} views</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => togglePublish(post.id, post.published)}
                      >
                        {post.published ? (
                          <><EyeOff className="w-4 h-4 mr-2" /> Unpublish</>
                        ) : (
                          <><Eye className="w-4 h-4 mr-2" /> Publish</>
                        )}
                      </Button>

                      <Button 
                        size="sm" 
                        variant="outline"
                        asChild
                      >
                        <Link to={`/admin/edit/${post.id}`}>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Link>
                      </Button>

                      <Button 
                        size="sm" 
                        variant="outline"
                        asChild
                      >
                        <Link to={`/blog/${post.slug}`} target="_blank">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Link>
                      </Button>

                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => deletePost(post.id, post.title)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
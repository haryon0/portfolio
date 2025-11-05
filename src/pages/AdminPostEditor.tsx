import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase, BlogPost } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function AdminPostEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    content: '',
    category: '',
    image_url: '',
    published: false,
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (id) {
      fetchPost(id);
    }
  }, [id]);

  async function fetchPost(postId: string) {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) throw error;

      setFormData({
        title: data.title,
        slug: data.slug,
        description: data.description || '',
        content: data.content,
        category: data.category || '',
        image_url: data.image_url || '',
        published: data.published,
      });
    } catch (error) {
      toast.error('Failed to load post');
      navigate('/admin/dashboard');
    }
  }

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    if (file.size > 2 * 1024 * 1024) { // 2MB
      toast.error('Image must be less than 2MB');
      return;
    }

    setUploading(true);

    try {
      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `blog-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setFormData(prev => ({
        ...prev,
        image_url: data.publicUrl,
      }));

      toast.success('Image uploaded');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent, publish = false) => {
    e.preventDefault();
    setLoading(true);

    try {
      const postData = {
        ...formData,
        published: publish,
        updated_at: new Date().toISOString(),
      };

      if (isEdit) {
        // Update
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', id);

        if (error) throw error;
        toast.success('Post updated!');
      } else {
        // Create
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);

        if (error) throw error;
        toast.success('Post created!');
      }

      navigate('/admin/dashboard');
    } catch (error: any) {
      console.error('Save error:', error);
      toast.error(error.message || 'Failed to save post');
    } finally {
      setLoading(false);
    }
  };

  // Quill editor modules
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'code-block'],
      ['clean']
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate('/admin/dashboard')}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-bold">
                {isEdit ? 'Edit Post' : 'New Post'}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                variant="outline"
                onClick={(e) => handleSubmit(e, false)}
                disabled={loading || !formData.title || !formData.content}
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>

              <Button 
                onClick={(e) => handleSubmit(e, true)}
                disabled={loading || !formData.title || !formData.content}
              >
                <Eye className="w-4 h-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Editor */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <form className="space-y-6">
            {/* Title */}
            <Card className="p-6">
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Post Title"
                className="w-full text-4xl font-bold border-none outline-none bg-transparent placeholder:text-muted-foreground"
                required
              />
            </Card>

            {/* Metadata */}
            <Card className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Slug */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary outline-none transition-colors"
                    placeholder="url-slug"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary outline-none transition-colors"
                  >
                    <option value="">Select category</option>
                    <option value="Network">Network</option>
                    <option value="Infrastructure">Infrastructure</option>
                    <option value="Security">Security</option>
                    <option value="VoIP">VoIP</option>
                    <option value="Tutorial">Tutorial</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Description (SEO)
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary outline-none transition-colors resize-none"
                  rows={3}
                  placeholder="Brief description for SEO and preview..."
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Featured Image
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="flex-1"
                    disabled={uploading}
                  />
                  {uploading && <span className="text-sm text-muted-foreground">Uploading...</span>}
                </div>
                {formData.image_url && (
                  <img 
                    src={formData.image_url} 
                    alt="Preview"
                    className="mt-4 w-full h-48 object-cover rounded-lg"
                  />
                )}
              </div>
            </Card>

            {/* Content Editor */}
            <Card className="p-6">
              <label className="block text-sm font-medium mb-4">
                Content
              </label>
              <ReactQuill
                value={formData.content}
                onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                modules={quillModules}
                className="min-h-[400px]"
                theme="snow"
              />
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
}
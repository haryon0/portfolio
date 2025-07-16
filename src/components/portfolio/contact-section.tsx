import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih atas pesan Anda. Saya akan segera merespon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "masharyono02@gmail.com",
      href: "mailto:masharyono02@gmail.com",
      description: "Hubungi saya via email untuk diskusi project atau kolaborasi"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+62 812-3456-7890",
      href: "https://wa.me/6281234567890",
      description: "Chat WhatsApp untuk komunikasi yang lebih cepat"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/haryon0",
      href: "https://linkedin.com/in/haryon0",
      description: "Connect dengan saya di LinkedIn untuk networking profesional"
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Boyolali, Central Java",
      href: "#",
      description: "Tersedia untuk project remote atau on-site di area Jawa Tengah"
    }
  ];

  return (
    <Section id="contact" className="bg-background">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-primary border-primary">
          Kontak
        </Badge>
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Mari Berkolaborasi
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Tertarik untuk bekerjasama atau berdiskusi tentang proyek IT? 
          Saya selalu terbuka untuk peluang baru dan tantangan menarik.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Informasi Kontak
            </h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {contact.label}
                      </h4>
                      <a 
                        href={contact.href}
                        className="text-primary hover:text-primary-hover font-medium block mb-2 transition-colors"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {contact.value}
                      </a>
                      <p className="text-sm text-muted-foreground">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Kontak Cepat
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="hover:scale-105 transition-transform"
                onClick={() => window.open('mailto:masharyono02@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Saya
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:scale-105 transition-transform"
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:scale-105 transition-transform"
                onClick={() => window.open('https://linkedin.com/in/haryon0', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Kirim Pesan
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="nama@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject">Subjek</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Topik pesan Anda"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tulis pesan Anda di sini..."
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full hover:scale-105 transition-transform"
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim Pesan
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16">
        <Card className="p-8 bg-gradient-primary text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">
            Siap untuk Proyek IT Berikutnya?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Dengan pengalaman 8+ tahun di bidang infrastruktur jaringan dan cybersecurity, 
            saya siap membantu organisasi Anda mencapai target teknologi yang lebih baik.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg"
              className="hover:scale-105 transition-transform"
              onClick={() => window.open('mailto:masharyono02@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Diskusi Proyek
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lihat Portfolio
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
}
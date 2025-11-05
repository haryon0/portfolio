import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, MessageCircle } from "lucide-react";
import "./styles/contact-section.css";

export function ContactSection() {
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
    <Section id="contact" className="contact-section bg-background">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-primary border-primary">
          Kontak
        </Badge>
        <h2 className="text-4xl font-bold text-foreground mb-6">
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Saya selalu terbuka untuk peluang baru dan tantangan menarik.
        </p>
      </div>

      <div role="status" aria-live="polite" id="contact-status" className="sr-only"></div>
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Informasi Kontak
          </h3>
          <div className="cards-grid" role="list">
            {contactInfo.map((contact, index) => (
              <Card key={index} role="listitem" className="contact-card p-6 hover:shadow-card transition duration-300 ">
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
                      className="contact-link text-primary hover:text-primary-hover font-medium block mb-2 transition-colors"
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
      </div>
    </Section>
  );
}
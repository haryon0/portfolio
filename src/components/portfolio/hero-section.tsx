import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import profileImage from "@/assets/haryono-profile.jpg";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-current rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-current rounded-full"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 border border-current rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6xl font-bold mb-2">Haryono</h1>
              <h2 className="text-xl lg:text-2xl text-accent-foreground font-medium mb-4">
                IT Network & Infrastructure Specialist
              </h2>
              <div className="flex items-center justify-center lg:justify-start text-primary-foreground/90">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Boyolali, Central Java, Indonesia</span>
              </div>
            </div>
            
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Profesional IT dengan pengalaman 8+ tahun dalam infrastruktur jaringan, 
              VoIP, cybersecurity, dan technical support. Ahli dalam memimpin proyek IT 
              dan implementasi solusi teknologi enterprise.
            </p>
            
            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                variant="secondary" 
                size="lg"
                className="hover:scale-105 transition-transform"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <Card className="p-8 bg-card/95 backdrop-blur-sm shadow-professional border-0">
              <div className="relative">
                <img 
                  src={profileImage}
                  alt="Haryono - IT Network & Infrastructure Specialist"
                  className="w-80 h-80 rounded-full object-cover shadow-card"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-3 rounded-full shadow-lg">
                  <Download className="w-6 h-6" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
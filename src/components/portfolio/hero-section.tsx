import { ArrowRight, Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Background with Subtle Gradients */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      {/* Elegant Accent Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '4s' }} />
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="space-y-12 animate-fade-in text-center lg:text-left">
            {/* Profile Image with Verification */}
            

            {/* Statistics */}
         

            {/* Skills Tags */}
          

            {/* Introduction */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="block text-foreground">Halo, Saya</span>
                <span className="block text-gradient mt-2">Haryono</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
                Profesional IT dengan <span className="font-semibold text-foreground">pengalaman 8+ tahun</span> dalam 
                infrastruktur jaringan, VoIP, cybersecurity, dan technical support. 
                Ahli dalam memimpin proyek IT dan implementasi solusi teknologi enterprise.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary-hover shadow-professional hover:shadow-hover transition-all duration-300 group"
              >
                <a href="#projects" className="flex items-center gap-2">
                  <span>Lihat Proyek</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/5 hover:border-primary transition-all duration-300 group"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <span>Hubungi Saya</span>
                  <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
              </Button>

              <Button 
                asChild 
                size="lg"
                variant="ghost"
                className="hover:bg-accent/10 hover:text-accent transition-all duration-300"
              >
                <a href="https://bit.ly/3LIxl2U" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </Button>
            </div>

            {/* Social Links - Professional Style */}
            <div className="flex items-center gap-4 pt-6 border-t border-border/50">
              <span className="text-sm text-muted-foreground font-medium">Connect:</span>
              <div className="flex gap-3">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 rounded-xl border border-border/50 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300"
                >
                  <a 
                    href="https://wa.me/628112633779" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 rounded-xl border border-border/50 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300"
                >
                  <a 
                    href="https://www.linkedin.com/in/haryon0/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 rounded-xl border border-border/50 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300"
                >
                  <a 
                    href="mailto:masharyono02@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>

                
              </div>
            </div>
          </div>

          {/* Visual Column - Professional Graphic */}
          <div className="relative lg:h-[600px] animate-scale-in" style={{ animationDelay: '0.2s' }}>
            {/* Main Card with Professional Design */}
            <div className="relative h-full rounded-2xl bg-card border border-border/50 shadow-professional overflow-hidden">
              {/* Accent Corner */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-accent opacity-20 rounded-bl-[100%]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-primary opacity-20 rounded-tr-[100%]" />
              
              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-center items-center text-center space-y-8">
                {/* Profile Image Placeholder */}
                <div className="relative">
                  <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-primary p-1">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-6xl font-bold text-primary">
                      <img 
                        src="/profile-photo.jpg" 
                        alt="Haryono" 
                        className="w-full h-full object-cover object-center rounded-full"
                        style={{objectFit: 'cover', objectPosition: 'center'}}
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground rounded-full p-3 shadow-accent">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6 w-full">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-gradient">8+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-gradient">50+</div>
                    <div className="text-xs text-muted-foreground">Projects Done</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-gradient">15+</div>
                    <div className="text-xs text-muted-foreground">Certifications</div>
                  </div>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Network', 'VoIP', 'Security', 'Cloud', 'Support'].map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-accent/10 backdrop-blur-sm border border-accent/20 flex items-center justify-center animate-float">
              <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-medium">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-current animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

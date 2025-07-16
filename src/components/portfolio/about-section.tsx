import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, Zap } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: CheckCircle,
      title: "Problem Solver",
      description: "Komunikatif & solution-oriented dalam menyelesaikan tantangan teknis"
    },
    {
      icon: Users,
      title: "Project Leader",
      description: "Berpengalaman memimpin proyek migrasi dan implementasi AD & SSO"
    },
    {
      icon: Target,
      title: "Industry Expert",
      description: "Familiar dengan environment industri & site terpencil"
    },
    {
      icon: Zap,
      title: "8+ Years",
      description: "Pengalaman mendalam di infrastruktur jaringan dan cybersecurity"
    }
  ];

  return (
    <Section id="about" className="bg-background">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-primary border-primary">
          Tentang Saya
        </Badge>
        <h2 className="text-4xl font-bold text-foreground mb-6">
          IT Professional dengan Passion untuk Teknologi
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Profesional IT dengan pengalaman 8+ tahun dalam infrastruktur jaringan, VoIP, 
          IT support, dan pengembangan sistem. Terbiasa memimpin proyek IT, troubleshooting, 
          serta memiliki berbagai sertifikasi cloud dan keamanan siber.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <Card 
            key={index}
            className="p-6 text-center hover:shadow-professional transition-all duration-300 hover:-translate-y-1 border-border/50"
          >
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Additional About Content */}
      <div className="mt-16">
        <Card className="p-8 bg-gradient-secondary border-0">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Mengapa Memilih Saya?
              </h3>
              <ul className="space-y-3">
                {[
                  "Pengalaman hands-on dengan teknologi enterprise",
                  "Track record implementasi proyek infrastruktur sukses",
                  "Kemampuan troubleshooting dan problem-solving yang kuat", 
                  "Komunikasi efektif dengan stakeholder teknis dan non-teknis",
                  "Sertifikasi internasional di cloud dan cybersecurity"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Fokus Keahlian
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground font-medium">Network Infrastructure</span>
                    <span className="text-muted-foreground">95%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground font-medium">Cybersecurity</span>
                    <span className="text-muted-foreground">90%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground font-medium">VoIP Systems</span>
                    <span className="text-muted-foreground">85%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground font-medium">Project Management</span>
                    <span className="text-muted-foreground">88%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
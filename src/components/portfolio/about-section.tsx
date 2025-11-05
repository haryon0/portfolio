import { CheckCircle2, Users, Target, Zap, Award, Code, Shield, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const highlights = [
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "Problem Solver",
      description: "Komunikatif & solution-oriented dalam menyelesaikan tantangan teknis kompleks",
      points: [
        "Analisis mendalam akar masalah",
        "Solusi efektif dan berkelanjutan",
        "Troubleshooting sistem kompleks"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Project Leader",
      description: "Berpengalaman memimpin tim dalam proyek infrastruktur IT skala enterprise",
      points: [
        "Migrasi AD & SSO implementation",
        "Manajemen tim dan resources",
        "Koordinasi stakeholder efektif"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Industry Expert",
      description: "Familiar dengan environment industri manufacturing dan site operations",
      points: [
        "Remote site management",
        "Industrial IT solutions",
        "Adaptasi lingkungan dinamis"
      ],
      color: "from-accent to-accent-hover"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "8+ Years Experience",
      description: "Pengalaman mendalam dalam infrastruktur jaringan dan cybersecurity",
      points: [
        "Network infrastructure design",
        "Security implementation",
        "Incident management"
      ],
      color: "from-primary to-primary-hover"
    }
  ];

  const skills = [
    { category: "Network", icon: <Code className="w-5 h-5" />, items: ["Cisco", "MikroTik", "Juniper", "VPN"] },
    { category: "Security", icon: <Shield className="w-5 h-5" />, items: ["Firewall", "IDS/IPS", "SIEM", "SOC"] },
    { category: "Systems", icon: <Rocket className="w-5 h-5" />, items: ["Windows Server", "Linux", "VMware", "Docker"] },
    { category: "Cloud", icon: <Award className="w-5 h-5" />, items: ["AWS", "Azure", "GCP", "Hybrid Cloud"] }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge 
              variant="outline" 
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5"
            >
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Tentang Saya</span>
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Profesional IT dengan</span>
              <br />
              <span className="text-gradient">Passion untuk Teknologi</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dedikasi tinggi dalam mengimplementasikan solusi IT yang inovatif, 
              aman, dan scalable untuk mendukung transformasi digital perusahaan.
            </p>
          </div>

          {/* Highlight Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover-lift bg-card/80 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                
                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Icon with Gradient Background */}
                  <div className="relative inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 rounded-2xl blur-xl`} />
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Points List */}
                  <ul className="space-y-2 pt-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            ))}
          </div>

          {/* Skills Section */}
          <Card className="p-8 md:p-10 border-2 border-border/50 hover:border-primary/30 transition-all bg-card/80 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Technical Expertise
              </h3>
              <p className="text-muted-foreground">
                Keahlian teknis yang dikuasai untuk mendukung solusi IT enterprise
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="group space-y-4 p-5 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 border border-transparent hover:border-primary/30"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">{skill.category}</h4>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <Badge 
                        key={i}
                        variant="secondary"
                        className="text-xs font-medium px-2 py-1 bg-background/50 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Stats Bar */}
          
        </div>
      </div>
    </section>
  );
}

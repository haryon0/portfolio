import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FolderOpen, 
  Calendar, 
  Users, 
  ArrowRight, 
  ExternalLink,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  category: "Infrastructure" | "Network" | "Communication" | "Telecommunications";
  period: string;
  teamSize: string;
  technologies: string[];
  challenges: string[];
  results: string[];
  status: "Completed" | "In Progress";
  impact: string;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Implementasi AD & SSO di Harita Group",
      description: "Proyek strategis migrasi dan implementasi sistem Active Directory dan Single Sign-On untuk meningkatkan keamanan dan efisiensi akses user di seluruh perusahaan grup dengan 1000+ users.",
      category: "Infrastructure",
      period: "2022 - 2023",
      teamSize: "5 orang",
      impact: "Mengurangi 70% waktu login dan 60% helpdesk tickets",
      technologies: ["Active Directory", "Windows Server 2019", "LDAP", "SSO", "PowerShell", "Group Policy"],
      challenges: [
        "Migrasi 1000+ user accounts tanpa service disruption",
        "Integrasi dengan 15+ aplikasi legacy berbeda platform",
        "Training dan change management untuk 200+ staff"
      ],
      results: [
        "Mengurangi waktu login user hingga 70%",
        "Meningkatkan keamanan dengan centralized authentication",
        "Mengurangi helpdesk ticket password reset sebesar 60%",
        "Zero downtime selama migrasi"
      ],
      status: "Completed"
    },
    {
      title: "Penguatan Telkomsel 4G di Site Kawasi",
      description: "Proyek kritis peningkatan infrastruktur komunikasi seluler di lokasi mining terpencil untuk memastikan konektivitas yang stabil bagi operasional 24/7 site production.",
      category: "Network",
      period: "2022",
      teamSize: "3 orang",
      impact: "Meningkatkan uptime komunikasi hingga 95%",
      technologies: ["4G LTE", "Antenna Systems", "Signal Boosters", "Network Monitoring", "Site Survey Tools"],
      challenges: [
        "Lokasi geografis ekstrem dengan akses terbatas",
        "Cuaca harsh dan kondisi lingkungan mining",
        "Koordinasi kompleks dengan operator Telkomsel"
      ],
      results: [
        "Meningkatkan signal strength dari -110dBm ke -85dBm",
        "Call success rate meningkat ke 95%",
        "Mengurangi komunikasi blackout sebesar 80%",
        "Coverage area bertambah 40%"
      ],
      status: "Completed"
    },
    {
      title: "Pengadaan GPS Fleet & Migrasi ICOM ke Hytera",
      description: "Proyek modernisasi sistem komunikasi dan tracking kendaraan operasional dengan teknologi GPS dan radio komunikasi advanced untuk 50+ unit fleet vehicles.",
      category: "Communication",
      period: "2023",
      teamSize: "4 orang",
      impact: "Optimasi operasional fleet hingga 25%",
      technologies: ["GPS Tracking", "Hytera DMR Radio", "Fleet Management System", "API Integration", "Real-time Dashboard"],
      challenges: [
        "Migrasi dari ICOM ke Hytera tanpa operational disruption",
        "Integrasi GPS tracking dengan SAP fleet management",
        "Training 100+ drivers dan operators untuk new equipment"
      ],
      results: [
        "Real-time tracking untuk 50+ kendaraan operasional",
        "Response time emergency berkurang 40%",
        "Fuel cost reduction 15% through optimized routing",
        "Maintenance cost turun 20%"
      ],
      status: "Completed"
    },
    {
      title: "SKKL Telkom - CLS Project",
      description: "Implementasi Customer Line Service untuk meningkatkan kualitas layanan telekomunikasi dan monitoring real-time performance jaringan untuk 1000+ customer lines.",
      category: "Telecommunications",
      period: "2021 - 2022",
      teamSize: "6 orang",
      impact: "Meningkatkan customer satisfaction 25%",
      technologies: ["CLS Platform", "Network Monitoring Tools", "Telkom Infrastructure", "REST API", "Real-time Analytics"],
      challenges: [
        "Integrasi dengan infrastruktur Telkom yang kompleks",
        "Compliance dengan standar telekomunikasi nasional",
        "Real-time monitoring untuk ribuan connections"
      ],
      results: [
        "Real-time monitoring untuk 1000+ customer lines",
        "Downtime detection dari hours ke minutes",
        "Customer satisfaction score naik 25%",
        "SLA compliance meningkat ke 99.5%"
      ],
      status: "Completed"
    }
  ];

  const getCategoryConfig = (category: string) => {
    const configs = {
      "Infrastructure": {
        color: "bg-blue-500/10 text-blue-600 border-blue-200 dark:border-blue-800",
        gradient: "from-blue-500 to-blue-600",
        icon: "🏗️"
      },
      "Network": {
        color: "bg-green-500/10 text-green-600 border-green-200 dark:border-green-800",
        gradient: "from-green-500 to-green-600",
        icon: "🌐"
      },
      "Communication": {
        color: "bg-purple-500/10 text-purple-600 border-purple-200 dark:border-purple-800",
        gradient: "from-purple-500 to-purple-600",
        icon: "📡"
      },
      "Telecommunications": {
        color: "bg-orange-500/10 text-orange-600 border-orange-200 dark:border-orange-800",
        gradient: "from-orange-500 to-orange-600",
        icon: "📞"
      }
    };
    return configs[category as keyof typeof configs] || configs.Infrastructure;
  };

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge 
              variant="outline" 
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5"
            >
              <FolderOpen className="w-4 h-4" />
              <span>Portfolio Proyek</span>
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Proyek & Implementasi</span>
              <br />
              <span className="text-gradient">Terbaru</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Koleksi proyek infrastruktur IT yang telah berhasil diselesaikan dengan 
              dampak positif signifikan bagi operasional organisasi
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => {
              const categoryConfig = getCategoryConfig(project.category);
              
              return (
                <Card 
                  key={index}
                  className="group overflow-hidden border-2 hover:border-primary/30 transition-all duration-500 hover-lift bg-card/80 backdrop-blur-sm"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="grid lg:grid-cols-12 gap-0">
                    {/* Left Column - Project Info */}
                    <div className="lg:col-span-5 p-8 bg-gradient-to-br from-secondary/30 to-background border-r border-border/50">
                      <div className="space-y-6">
                        {/* Category Badge & Status */}
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <Badge 
                            variant="outline" 
                            className={`${categoryConfig.color} font-semibold px-3 py-1`}
                          >
                            <span className="mr-2">{categoryConfig.icon}</span>
                            {project.category}
                          </Badge>
                          <Badge 
                            variant={project.status === "Completed" ? "default" : "secondary"}
                            className="bg-primary text-primary-foreground"
                          >
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            {project.status}
                          </Badge>
                        </div>

                        {/* Project Title */}
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Impact Highlight */}
                        <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                          <div className="flex items-center gap-2 text-accent mb-1">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-semibold">Key Impact</span>
                          </div>
                          <p className="text-sm font-medium text-foreground">{project.impact}</p>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{project.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            <span>Tim: {project.teamSize}</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-7 p-8">
                      <div className="grid md:grid-cols-2 gap-8 h-full">
                        {/* Technologies */}
                        <div className="space-y-4">
                          <h4 className="text-sm font-bold text-foreground uppercase tracking-wide flex items-center gap-2">
                            <div className="w-1 h-4 bg-primary rounded-full" />
                            Teknologi
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge 
                                key={i} 
                                variant="secondary" 
                                className="text-xs font-medium bg-secondary/80 hover:bg-primary/10 hover:text-primary transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          {/* Challenges */}
                          <div className="pt-4">
                            <h4 className="text-sm font-bold text-foreground uppercase tracking-wide flex items-center gap-2 mb-3">
                              <div className="w-1 h-4 bg-accent rounded-full" />
                              Tantangan
                            </h4>
                            <ul className="space-y-2">
                              {project.challenges.map((challenge, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                  <span>{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="space-y-4">
                          <h4 className="text-sm font-bold text-foreground uppercase tracking-wide flex items-center gap-2">
                            <div className="w-1 h-4 bg-green-500 rounded-full" />
                            Hasil & Dampak
                          </h4>
                          <ul className="space-y-3">
                            {project.results.map((result, i) => (
                              <li key={i} className="flex items-start gap-3 group/item">
                                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-green-500 transition-colors">
                                  <CheckCircle2 className="w-4 h-4 text-green-600 group-hover/item:text-white transition-colors" />
                                </div>
                                <span className="text-sm font-medium text-foreground leading-relaxed">
                                  {result}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className={`h-1 w-full bg-gradient-to-r ${categoryConfig.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
        </div>
      </div>
    </section>
  );
}

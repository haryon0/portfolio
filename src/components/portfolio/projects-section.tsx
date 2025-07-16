import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderOpen, Calendar, Users, ChevronRight, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Implementasi AD & SSO di Harita Group",
      description: "Proyek migrasi dan implementasi sistem Active Directory dan Single Sign-On untuk meningkatkan keamanan dan efisiensi akses user di seluruh perusahaan grup.",
      category: "Infrastructure",
      period: "2022 - 2023",
      teamSize: "5 orang",
      technologies: ["Active Directory", "Windows Server", "LDAP", "SSO", "PowerShell"],
      challenges: [
        "Migrasi data user dari sistem legacy tanpa downtime",
        "Integrasi dengan aplikasi existing yang berbeda platform",
        "Training user untuk adaptasi sistem baru"
      ],
      results: [
        "Mengurangi waktu login user hingga 70%",
        "Meningkatkan keamanan akses dengan centralized authentication",
        "Mengurangi helpdesk ticket terkait password reset sebesar 60%"
      ],
      status: "Completed"
    },
    {
      title: "Penguatan Telkomsel 4G di Site Kawasi",
      description: "Proyek peningkatan infrastruktur komunikasi seluler di lokasi mining terpencil untuk memastikan konektivitas yang stabil bagi operasional site.",
      category: "Network",
      period: "2022",
      teamSize: "3 orang",
      technologies: ["4G LTE", "Antenna Systems", "Signal Boosters", "Network Monitoring"],
      challenges: [
        "Lokasi geografis yang sulit dijangkau",
        "Cuaca ekstrem dan kondisi lingkungan harsh",
        "Koordinasi dengan operator telekomunikasi"
      ],
      results: [
        "Meningkatkan signal strength dari -110dBm menjadi -85dBm",
        "Memperbaiki call success rate hingga 95%",
        "Mengurangi komunikasi blackout sebesar 80%"
      ],
      status: "Completed"
    },
    {
      title: "Pengadaan GPS Fleet & Migrasi ICOM ke Hytera",
      description: "Proyek modernisasi sistem komunikasi dan tracking kendaraan operasional dengan teknologi GPS dan radio komunikasi yang lebih advanced.",
      category: "Communication",
      period: "2023",
      teamSize: "4 orang",
      technologies: ["GPS Tracking", "Hytera Radio", "Fleet Management", "API Integration"],
      challenges: [
        "Migrasi dari sistem ICOM ke Hytera tanpa mengganggu operasi",
        "Integrasi GPS tracking dengan sistem fleet management existing",
        "Training operator untuk menggunakan perangkat baru"
      ],
      results: [
        "Real-time tracking untuk 50+ kendaraan operasional",
        "Meningkatkan response time emergency hingga 40%",
        "Mengurangi fuel cost melalui optimized routing sebesar 15%"
      ],
      status: "Completed"
    },
    {
      title: "SKKL Telkom - CLS Project",
      description: "Proyek implementasi Customer Line Service untuk meningkatkan kualitas layanan telekomunikasi dan monitoring real-time performance jaringan.",
      category: "Telecommunications",
      period: "2021 - 2022",
      teamSize: "6 orang",
      technologies: ["CLS Platform", "Network Monitoring", "Telkom Infrastructure", "API"],
      challenges: [
        "Integrasi dengan infrastruktur Telkom yang kompleks",
        "Memastikan compliance dengan standar telekomunikasi",
        "Monitoring real-time untuk thousands of connections"
      ],
      results: [
        "Monitoring real-time untuk 1000+ customer lines",
        "Mengurangi downtime detection time dari hours ke minutes",
        "Meningkatkan customer satisfaction score sebesar 25%"
      ],
      status: "Completed"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Infrastructure": "bg-blue-500/10 text-blue-600 border-blue-200",
      "Network": "bg-green-500/10 text-green-600 border-green-200",
      "Communication": "bg-purple-500/10 text-purple-600 border-purple-200",
      "Telecommunications": "bg-orange-500/10 text-orange-600 border-orange-200"
    };
    return colors[category] || "bg-gray-500/10 text-gray-600 border-gray-200";
  };

  return (
    <Section id="projects" className="bg-background">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-primary border-primary">
          Proyek Unggulan
        </Badge>
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Proyek & Implementasi Terbaru
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Koleksi proyek-proyek infrastruktur IT yang telah berhasil diselesaikan dengan dampak positif bagi organisasi
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <Card 
            key={index}
            className="p-8 hover:shadow-professional transition-all duration-300 border-l-4 border-l-accent"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Project Overview */}
              <div className="lg:col-span-1">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FolderOpen className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <Badge 
                      variant="outline" 
                      className={`mb-3 ${getCategoryColor(project.category)}`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.period}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Tim: {project.teamSize}
                  </div>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className="mt-2"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Technologies & Challenges */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Teknologi yang Digunakan
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Tantangan Utama
                      </h4>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Results & Actions */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Hasil & Dampak
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Detail Proyek
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Project Summary */}
      <div className="mt-16">
        <Card className="p-8 bg-gradient-secondary">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Proyek Major</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">18</div>
              <div className="text-muted-foreground">Tim Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <div className="text-muted-foreground">Avg Improvement</div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
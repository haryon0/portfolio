import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "PT Halmahera Persada Lygend",
      position: "IT Network Infrastructure Staff",
      period: "2021 - Sekarang",
      location: "Site Mining Operations",
      type: "Full-time",
      responsibilities: [
        "Mengelola dan memelihara jaringan multi-site dengan 200+ endpoint",
        "Implementasi dan maintenance sistem VoIP untuk komunikasi site",
        "Monitoring dan troubleshooting sistem CCTV dan keamanan jaringan",
        "Pemasangan dan konfigurasi infrastruktur wireless dan fiber optic",
        "Meningkatkan network uptime hingga 99.5% melalui proactive monitoring",
        "Koordinasi dengan vendor untuk upgrade infrastruktur jaringan"
      ],
      achievements: [
        "Berhasil mengimplementasikan AD & SSO di Harita Group",
        "Memimpin proyek penguatan Telkomsel 4G di Site Kawasi",
        "Melakukan migrasi sistem komunikasi ICOM ke Hytera"
      ]
    },
    {
      company: "PT Tupai Adyamas Indonesia",
      position: "IT Support Staff",
      period: "2015 - 2021",
      location: "Jakarta",
      type: "Full-time", 
      responsibilities: [
        "Memberikan technical support untuk 150+ karyawan",
        "Maintenance dan troubleshooting hardware & software",
        "Manajemen inventory dan asset IT perusahaan",
        "Setup dan konfigurasi workstation baru",
        "Dokumentasi sistem dan prosedur IT",
        "Helpdesk support dan user training"
      ],
      achievements: [
        "Meningkatkan response time helpdesk dari 4 jam menjadi 1 jam",
        "Implementasi sistem ticketing GLPI untuk tracking issues",
        "Mengurangi downtime sistem hingga 60% melalui preventive maintenance"
      ]
    }
  ];

  return (
    <Section id="experience" className="bg-background">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-primary border-primary">
          Pengalaman Kerja
        </Badge>
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Perjalanan Karir Profesional
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          8+ tahun pengalaman di industri IT dengan fokus pada infrastruktur jaringan dan technical support
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card 
            key={index}
            className="p-8 hover:shadow-professional transition-all duration-300 border-l-4 border-l-primary"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {exp.position}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    {exp.type}
                  </Badge>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Tanggung Jawab
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Pencapaian Utama
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Experience Summary */}
      <div className="mt-16">
        <Card className="p-8 bg-gradient-secondary">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">350+</div>
              <div className="text-muted-foreground">Endpoint Dikelola</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
              <div className="text-muted-foreground">Network Uptime</div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
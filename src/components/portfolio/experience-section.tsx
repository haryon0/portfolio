import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "PT Halmahera Persada Lygend",
      position: "Senior IT Network Infrastructure",
      period: "Sept 2021 - Sekarang",
      location: "Site Kawasi",
      type: "Full-time",
      responsibilities: [
        "Mengelola dan mengoptimalkan infrastruktur jaringan untuk meningkatkan stabilitas dan uptime koneksi di berbagai lokasi",
        "Konfigurasi dan instalasi perangkat jaringan (router, switch, firewall) untuk optimasi efisiensi operasional",
        "Monitoring kinerja jaringan real-time dan penyelesaian masalah kompleks untuk menjaga kelancaran bisnis",
        "Perancangan dan implementasi infrastruktur fiber optic untuk komunikasi antar divisi berkecepatan tinggi",
        "Pengembangan solusi komunikasi wireless (point-to-point dan point-to-multipoint) untuk lokasi terpencil",
        "Instalasi dan konfigurasi sistem CCTV untuk peningkatan keamanan area operasional",
        "Manajemen sistem radio komunikasi Hytera & ICOM termasuk migrasi dari analog ke digital"
      ],
      achievements: [
        "Berhasil meningkatkan stabilitas jaringan dan mencapai uptime 99.9% di seluruh lokasi operasional",
        "Implementasi sistem fiber optic yang meningkatkan kecepatan transfer data hingga 10x lipat",
        "Optimasi sistem radio komunikasi dengan peningkatan coverage area hingga 40%",
        "Modernisasi infrastruktur dengan migrasi dari sistem analog (VHF) ke digital (UHF)"
      ]
    },
    {
      company: "PT Tupai Adyamas Indonesia",
      position: "Section Chief IT",
      period: "Feb 2015 - Sept 2021",
      location: "Boyolali",
      type: "Full-time", 
      responsibilities: [
        "Memimpin layanan dukungan teknis untuk 50+ pengguna dengan standar SLA yang ketat",
        "Mengarahkan proses instalasi, konfigurasi, dan pemeliharaan perangkat IT secara komprehensif",
        "Pengelolaan sistem helpdesk IT dengan fokus pada peningkatan efisiensi penanganan tiket",
        "Analisis root cause dan koordinasi tindakan korektif untuk minimalisasi downtime",
        "Supervisi pengelolaan database aset IT dan konfigurasi perangkat",
        "Implementasi jadwal maintenance berkala untuk sistem dan infrastruktur IT",
        "Koordinasi dengan vendor eksternal untuk penanganan masalah IT kritis"
      ],
      achievements: [
        "Optimasi proses helpdesk dengan pengurangan response time sebesar 75%",
        "Implementasi sistem manajemen aset IT yang meningkatkan akurasi inventaris hingga 98%",
        "Pengurangan downtime sistem sebesar 60% melalui preventive maintenance",
        "Berhasil mengimplementasi sistem CCTV terintegrasi di seluruh area operasional"
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
    </Section>
  );
}
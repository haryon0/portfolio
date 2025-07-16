import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    {
      name: "Google IT Support Professional Certificate",
      issuer: "Google (Coursera)",
      date: "2023",
      category: "IT Support",
      verified: true,
      description: "Comprehensive program covering troubleshooting, customer service, networking, operating systems, system administration, and security."
    },
    {
      name: "CCNA - Cisco Certified Network Associate",
      issuer: "Cisco",
      date: "2022",
      category: "Networking",
      verified: true,
      description: "Networking fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation."
    },
    {
      name: "Fortinet Network Security Associate (FNSA)",
      issuer: "Fortinet",
      date: "2022",
      category: "Cybersecurity",
      verified: true,
      description: "FortiGate security appliances, network security concepts, and Fortinet Security Fabric."
    },
    {
      name: "Ethical Hacker & Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2021",
      category: "Cybersecurity",
      verified: true,
      description: "Ethical hacking methodology, penetration testing, and cybersecurity best practices."
    },
    {
      name: "OCNA Wireless - Omada",
      issuer: "TP-Link",
      date: "2023",
      category: "Wireless",
      verified: true,
      description: "Omada SDN platform, wireless network design, implementation, and management."
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      category: "Cloud",
      verified: true,
      description: "AWS cloud concepts, security, technology, and billing & pricing."
    },
    {
      name: "Alibaba Cloud Associate",
      issuer: "Alibaba Cloud",
      date: "2022",
      category: "Cloud",
      verified: true,
      description: "Alibaba Cloud products, services, and solutions for cloud computing."
    },
    {
      name: "Fortinet Network Security Fundamentals",
      issuer: "Fortinet",
      date: "2021",
      category: "Cybersecurity",
      verified: true,
      description: "Basic security concepts, threat landscape, and FortiGate firewall fundamentals."
    }
  ];

  const categories = [
    { name: "IT Support", color: "bg-blue-500/10 text-blue-600 border-blue-200" },
    { name: "Networking", color: "bg-green-500/10 text-green-600 border-green-200" },
    { name: "Cybersecurity", color: "bg-red-500/10 text-red-600 border-red-200" },
    { name: "Wireless", color: "bg-purple-500/10 text-purple-600 border-purple-200" },
    { name: "Cloud", color: "bg-orange-500/10 text-orange-600 border-orange-200" }
  ];

  const getCategoryStyle = (category: string) => {
    const categoryInfo = categories.find(cat => cat.name === category);
    return categoryInfo ? categoryInfo.color : "bg-gray-500/10 text-gray-600 border-gray-200";
  };

  return (
    <Section id="certifications" className="bg-muted/30">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-primary border-primary">
          Sertifikasi
        </Badge>
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Sertifikasi & Kredensial Profesional
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Komitmen terhadap pembelajaran berkelanjutan dan standar industri melalui sertifikasi resmi
        </p>
      </div>

      {/* Certification Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <Badge 
            key={index}
            variant="outline" 
            className={`px-4 py-2 ${category.color}`}
          >
            {category.name}
          </Badge>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card 
            key={index}
            className="p-6 hover:shadow-professional transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              {cert.verified && (
                <Badge variant="secondary" className="text-xs">
                  Verified
                </Badge>
              )}
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {cert.issuer}
              </p>
              <div className="flex items-center justify-between">
                <Badge 
                  variant="outline" 
                  className={`text-xs ${getCategoryStyle(cert.category)}`}
                >
                  {cert.category}
                </Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  {cert.date}
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {cert.description}
            </p>
            
            <div className="flex items-center text-sm text-primary group-hover:text-primary-hover transition-colors">
              <ExternalLink className="w-4 h-4 mr-1" />
              <span>View Certificate</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Certification Stats */}
      <div className="mt-16">
        <Card className="p-8 bg-card">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Total Sertifikasi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Kategori Berbeda</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2023</div>
              <div className="text-muted-foreground">Sertifikasi Terbaru</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Status Aktif</div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
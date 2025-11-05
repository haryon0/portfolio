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
      description: "Comprehensive program covering troubleshooting, customer service, networking, operating systems, system administration, and security.",
      certificateUrl: "https://coursera.org/share/c105c3a8eae035d200723b7af4eba7a6"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2024",
      category: "Networking",
      verified: true,
      description: "Networking fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation.",
      certificateUrl: "https://www.credly.com/badges/bf431dee-6290-42fa-91da-3efb0fe1bde1/public_url"
    },
    {
      name: "Fortinet Certified Fundamentals Cybersecurity",
      issuer: "Fortinet",
      date: "2025",
      category: "Cybersecurity",
      verified: true,
      description: "FortiGate security appliances, network security concepts, and Fortinet Security Fabric.",
      certificateUrl: "https://www.credly.com/badges/5085d3c0-6566-464f-938e-9b2769cb01d8/public_url"
    },
    {
      name: "Ethical Hacker",
      issuer: "Cisco Networking Academy",
      date: "2021",
      category: "Cybersecurity",
      verified: true,
      description: "Ethical hacking methodology, penetration testing, and cybersecurity best practices.",
      certificateUrl: "https://www.credly.com/badges/6b0a646c-1371-49e6-af50-e9e947501393/public_url"
    },
    {
      name: "OCNA Wireless - Omada",
      issuer: "TP-Link",
      date: "2025",
      category: "Wireless",
      verified: true,
      description: "Omada SDN platform, wireless network design, implementation, and management.",
      certificateUrl: "https://tp-link.com/academy/verify/MNO345"
    },
    {
      name: "OCNA Routing & Switching",
      issuer: "TP-Link",
      date: "2025",
      category: "Routing & Switching",
      verified: true,
      description: "Omada SDN platform, wireless network design, implementation, and management.",
      certificateUrl: "https://tp-link.com/academy/verify/MNO345"
    },
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Operations",
      issuer: "Amazon Web Services",
      date: "2022",
      category: "Cloud",
      verified: true,
      description: "AWS cloud concepts, security, technology, and billing & pricing.",
      certificateUrl: "https://www.credly.com/badges/9d12da2b-777e-4538-b951-1da916092f76/public_url"
    },
    {
      name: "ACA Big Data Certification",
      issuer: "Alibaba Cloud",
      date: "2023",
      category: "Cloud",
      verified: true,
      description: "Alibaba Cloud products, services, and solutions for cloud computing.",
      certificateUrl: "https://edu.alibabacloud.com/certification/aca_bigdata?spm=a2c4d.11423077.0.0.110a12dbMCnwjq"
    },
    {
      name: "Fortinet Certified Associate Cybersecurity",
      issuer: "Fortinet",
      date: "2025",
      category: "Cybersecurity",
      verified: true,
      description: "Basic security concepts, threat landscape, and FortiGate firewall fundamentals.",
      certificateUrl: "https://www.credly.com/badges/a3ed3f37-22d7-4a44-9ee5-d96d54a12f65/public_url"
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
            
            <a 
              href={cert.certificateUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-primary group-hover:text-primary-hover transition-colors hover:underline"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              <span>View Certificate</span>
            </a>
          </Card>
        ))}
      </div>

      {/* Certification Stats */}
    </Section>
  );
}
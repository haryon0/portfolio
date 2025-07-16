import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Server, Shield, Users } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Network,
      title: "Jaringan & Infrastruktur",
      color: "bg-blue-500/10 text-blue-600",
      skills: ["LAN/WAN", "TCP/IP", "Fiber Optic", "Firewall", "VLAN", "VPN", "Routing & Switching"]
    },
    {
      icon: Server,
      title: "Perangkat & Platform",
      color: "bg-green-500/10 text-green-600", 
      skills: ["Fortinet", "Mikrotik", "UniFi", "Grandstream", "Hikvision", "Windows Server", "Linux"]
    },
    {
      icon: Shield,
      title: "Software & Tools",
      color: "bg-purple-500/10 text-purple-600",
      skills: ["Grafana", "GLPI", "Office 365", "Active Directory", "VMware", "Docker", "Git"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "bg-orange-500/10 text-orange-600",
      skills: ["Leadership", "Project Coordination", "Vendor Management", "Documentation", "Training", "Troubleshooting"]
    }
  ];

  return (
    <Section id="skills" className="bg-muted/30">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-primary border-primary">
          Keahlian
        </Badge>
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Teknologi & Keahlian
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Pengalaman mendalam dengan berbagai teknologi dan tools modern untuk infrastruktur IT
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <Card 
            key={index}
            className="p-6 hover:shadow-professional transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mb-6">
              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {category.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge 
                  key={skillIndex}
                  variant="secondary"
                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Additional Technical Skills */}
      <div className="mt-16">
        <Card className="p-8 bg-card">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Sertifikasi & Platform Cloud
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary" />
                Cybersecurity
              </h4>
              <ul className="space-y-2">
                {["Ethical Hacker (Cisco)", "Fortinet Security", "Network Security", "Vulnerability Assessment"].map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Server className="w-5 h-5 mr-2 text-primary" />
                Cloud Platforms
              </h4>
              <ul className="space-y-2">
                {["AWS Certified", "Alibaba Cloud", "Microsoft Azure", "Google Cloud"].map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Network className="w-5 h-5 mr-2 text-primary" />
                Network Certifications
              </h4>
              <ul className="space-y-2">
                {["CCNA (Cisco)", "OCNA Wireless - Omada", "Mikrotik Certified", "Fortinet Associate"].map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
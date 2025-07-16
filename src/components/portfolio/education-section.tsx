import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export function EducationSection() {
  const education = {
    degree: "Diploma III (D3) Teknik Informatika",
    institution: "Universitas Kristen Satya Wacana",
    location: "Salatiga, Jawa Tengah",
    period: "2012 - 2015",
    gpa: "3.06",
    description: "Program studi yang fokus pada pengembangan keahlian teknis di bidang teknologi informasi, meliputi pemrograman, jaringan komputer, database, dan sistem informasi.",
    relevantCourses: [
      "Jaringan Komputer & Komunikasi Data",
      "Sistem Operasi & Server Administration", 
      "Database Management Systems",
      "Pemrograman & Software Development",
      "Network Security & Cybersecurity",
      "IT Project Management"
    ],
    achievements: [
      "Menyelesaikan final project dengan tema Network Security Implementation",
      "Aktif dalam organisasi mahasiswa bidang IT",
      "Participant dalam workshop dan seminar teknologi"
    ]
  };

  const continuousLearning = [
    {
      platform: "Coursera",
      courses: ["Google IT Support Professional Certificate", "Network Security Fundamentals"],
      year: "2023"
    },
    {
      platform: "Cisco Networking Academy",
      courses: ["CCNA Curriculum", "Cybersecurity Essentials", "Ethical Hacker"],
      year: "2021-2022"
    },
    {
      platform: "Fortinet Training",
      courses: ["Network Security Associate", "Security Fundamentals"],
      year: "2022"
    },
    {
      platform: "Cloud Platform Training",
      courses: ["AWS Cloud Practitioner", "Alibaba Cloud Associate"],
      year: "2022-2023"
    }
  ];

  return (
    <Section id="education" className="bg-muted/30">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-primary border-primary">
          Pendidikan
        </Badge>
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Latar Belakang Pendidikan
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Fondasi akademis yang kuat dan komitmen terhadap pembelajaran berkelanjutan di bidang teknologi informasi
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Formal Education */}
        <div className="lg:col-span-2">
          <Card className="p-8 hover:shadow-professional transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {education.degree}
                </h3>
                <h4 className="text-lg text-primary font-semibold mb-3">
                  {education.institution}
                </h4>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {education.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {education.location}
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    GPA: {education.gpa}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {education.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-semibold text-foreground mb-4">
                  Mata Kuliah Relevan
                </h5>
                <ul className="space-y-2">
                  {education.relevantCourses.map((course, index) => (
                    <li key={index} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-foreground mb-4">
                  Pencapaian & Aktivitas
                </h5>
                <ul className="space-y-2">
                  {education.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Education Stats */}
        <div className="space-y-6">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">3.06</div>
            <div className="text-muted-foreground">GPA</div>
            <div className="text-xs text-muted-foreground mt-1">Skala 4.0</div>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">2015</div>
            <div className="text-muted-foreground">Tahun Lulus</div>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">8+</div>
            <div className="text-muted-foreground">Tahun Pengalaman</div>
            <div className="text-xs text-muted-foreground mt-1">Sejak lulus</div>
          </Card>
        </div>
      </div>

      {/* Continuous Learning */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
          Pembelajaran Berkelanjutan
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {continuousLearning.map((learning, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {learning.platform}
                </h4>
                <Badge variant="secondary" className="text-xs">
                  {learning.year}
                </Badge>
              </div>
              
              <ul className="space-y-2">
                {learning.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="text-sm text-muted-foreground">
                    • {course}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Philosophy */}
      <div className="mt-16">
        <Card className="p-8 bg-gradient-secondary text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Filosofi Pembelajaran
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            "Teknologi terus berkembang dengan cepat. Sebagai profesional IT, saya percaya bahwa 
            pembelajaran berkelanjutan bukan hanya pilihan, tetapi keharusan untuk tetap relevan 
            dan memberikan solusi terbaik bagi organisasi."
          </p>
        </Card>
      </div>
    </Section>
  );
}
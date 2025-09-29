import { Code, Database, Globe, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React.js, JavaScript ES6+, HTML5, CSS3 with modern responsive design principles"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Java, Spring Boot, REST APIs, JPA/Hibernate with secure authentication"
    },
    {
      icon: Globe,
      title: "Full Stack Projects",
      description: "End-to-end applications with database integration and user management"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Strong analytical skills with focus on clean, maintainable code"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A dedicated Full Stack Developer with expertise in modern web technologies, 
            committed to creating impactful digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Profile section */}
          <div className="space-y-6">
            <div className="clean-card p-8 hover-lift">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={profilePhoto}
                    alt="Abdus Samee"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">My Journey</h3>
                  <p className="text-primary font-medium">BCA Graduate • Java Full Stack Developer</p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a Computer Applications graduate from Aryabhatta Knowledge University with 
                  a passion for creating innovative web solutions. Currently pursuing advanced 
                  Java Full Stack Development training at Naresh IT Technologies, Hyderabad.
                </p>
                <p>
                  My expertise spans modern web technologies, with strong problem-solving abilities 
                  and a commitment to writing clean, efficient code. I thrive in collaborative 
                  environments and excel at transforming complex requirements into user-friendly applications.
                </p>
              </div>
            </div>

            <div className="clean-card p-8 hover-lift">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Core Strengths</h3>
              <ul className="space-y-3">
                {[
                  "Strong problem-solving and debugging skills",
                  "Ability to learn new technologies quickly", 
                  "Excellent teamwork and communication",
                  "Focus on clean, maintainable code"
                ].map((strength, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="clean-card hover-lift group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Training */}
        <div className="clean-card p-8 lg:p-12">
          <h3 className="text-2xl font-serif font-semibold text-center mb-8">
            <span className="gradient-text">Education & Training</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-serif font-semibold mb-2">Java Full Stack Development</h4>
              <p className="text-primary font-medium mb-2">Naresh IT Technologies, Hyderabad</p>
              <p className="text-sm text-muted-foreground mb-4">July 2024 – Present</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprehensive training in Core & Advanced Java, Spring Boot, JPA/Hibernate, 
                REST APIs, and database optimization with practical project experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-serif font-semibold mb-2">Bachelor of Computer Application</h4>
              <p className="text-primary font-medium mb-2">Aryabhatta Knowledge University</p>
              <p className="text-sm text-muted-foreground mb-4">2020 – 2023</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strong foundation in computer science, programming fundamentals, 
                database management, and software development principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
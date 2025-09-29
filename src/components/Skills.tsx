import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Redux", level: 75 }
      ]
    },
    {
      title: "Backend", 
      skills: [
        { name: "Java", level: 88 },
        { name: "Spring Boot", level: 82 },
        { name: "J2EE/Servlet", level: 78 },
        { name: "JDBC", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "MVC Architecture", level: 83 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Oracle", level: 75 },
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Eclipse/STS", level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proficient in modern web technologies with hands-on experience in full-stack development, 
            database management, and development tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="clean-card hover-lift">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-serif font-semibold text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key competencies */}
        <div className="clean-card p-8 lg:p-12">
          <h3 className="text-2xl font-serif font-semibold mb-8 text-center gradient-text">
            Key Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Responsive Design",
              "API Integration", 
              "Database Design",
              "Security Implementation",
              "Performance Optimization",
              "Code Documentation",
              "Testing & Debugging",
              "Agile Development"
            ].map((competency, index) => (
              <div
                key={competency}
                className="text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors hover-lift"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? 'fade-in 0.6s ease-out forwards' : 'none'
                }}
              >
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-lg">
                    {competency.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">{competency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
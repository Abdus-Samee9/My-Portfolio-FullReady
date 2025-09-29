import { ExternalLink, Github, Database, Shield, Smartphone, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "CRUD Application",
      description: "Full-stack application with Spring Boot and JPA for Oracle database integration.",
      technologies: ["Spring Boot", "JPA", "Oracle", "JSP", "Thymeleaf", "Bootstrap"],
      features: [
        "RESTful API architecture",
        "Database integration with Oracle",
        "Responsive user interface",
        "Dynamic content rendering"
      ],
      icon: Database,
      githubUrl: "https://github.com/Abdus-Samee9"
    },
    {
      title: "Stock Management System",
      description: "Enterprise inventory management with role-based authentication and secure access control.",
      technologies: ["Java Servlet", "JSP", "Bootstrap", "MD5 Security"],
      features: [
        "Role-based access control",
        "Secure MD5 authentication",
        "Admin and user dashboards",
        "Real-time stock monitoring"
      ],
      icon: Shield,
      githubUrl: "https://github.com/Abdus-Samee9"
    },
    {
      title: "BSEB Marksheet Management System",
      description: "Comprehensive marksheet management system for BSEB (Bihar School Examination Board) results with automated processing and secure data handling.",
      technologies: ["Java", "JSP", "MySQL", "Bootstrap", "PDF Generation", "Excel Integration"],
      features: [
        "BSEB result data processing",
        "Automated marksheet generation",
        "Student record management",
        "PDF export functionality",
        "Grade calculation system",
        "Bulk data import/export"
      ],
      icon: GraduationCap,
      githubUrl: "https://github.com/Abdus-Samee9"
    },
    {
      title: "Personal Portfolio",
      description: "Modern portfolio website with clean design and responsive layout built with React.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
      features: [
        "Responsive design system",
        "Clean, professional interface",
        "Performance optimized",
        "SEO friendly structure"
      ],
      icon: Smartphone,
      githubUrl: "https://github.com/Abdus-Samee9"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my development expertise through practical applications, 
            demonstrating proficiency in full-stack development.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={project.title} className="clean-card hover-lift overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Project Icon & Title */}
                <div className="lg:col-span-1 p-8 bg-gradient-primary text-primary-foreground flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <project.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">Project #{index + 1}</p>
                </div>

                {/* Project Content */}
                <div className="lg:col-span-2 p-8">
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-serif font-semibold mb-3 text-foreground">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-serif font-semibold mb-3 text-foreground">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button 
                        className="btn-primary hover-lift"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="btn-outline hover-lift"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="clean-card p-8 inline-block">
            <h3 className="text-2xl font-serif font-semibold mb-4 gradient-text">
              Want to see more?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Check out my GitHub profile for additional projects and contributions.
            </p>
            <Button 
              size="lg"
              className="btn-primary hover-lift"
              asChild
            >
              <a href="https://github.com/Abdus-Samee9" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { useEffect, useState } from "react";
import { ArrowDown, Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Full Stack Developer",
    "React Developer", 
    "Java Spring Boot Developer",
    "Web Application Developer",
    "Software Engineer"
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4">
                <span className="text-foreground">Hello, I'm</span>
                <br />
                <span className="gradient-text">Abdus Samee</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium mb-6 h-8 overflow-hidden">
                <span 
                  key={currentRole}
                  className="block animate-slide-up-text"
                >
                  {roles[currentRole]}
                </span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Passionate about creating scalable web applications with React, Java Spring Boot, 
                and modern technologies. I build digital solutions that make a difference.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-primary hover-lift"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="btn-outline hover-lift"
                asChild
              >
                <a href="https://github.com/Abdus-Samee9" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </a>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-slide-in' : 'opacity-0'} [animation-delay:0.3s]`}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-xl hover-lift">
                <img
                  src={profilePhoto}
                  alt="Abdus Samee - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-primary rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16">
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
            <span className="block text-sm mt-2">Scroll to learn more</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
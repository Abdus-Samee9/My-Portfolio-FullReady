import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding border-t border-border bg-muted/30">
      <div className="container-custom">
        <div className="text-center space-y-8">
          {/* Logo/Name */}
          <div className="text-2xl font-serif font-bold">
            <span className="gradient-text">Abdus Samee</span>
          </div>

          {/* Quote */}
          <blockquote className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed italic font-serif">
            "Code is like humor. When you have to explain it, it's bad."
          </blockquote>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-primary mx-auto"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <span>© {currentYear} Abdus Samee. Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>and lots of coffee</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span>Built with React + TypeScript</span>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 btn-primary hover-lift rounded-full shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
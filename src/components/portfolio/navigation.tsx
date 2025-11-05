import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  Home, 
  User, 
  Briefcase, 
  FolderGit2,
  Award, 
  Mail,
  Menu,
  X
} from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "Home", icon: Home, href: "#hero" },
    { label: "About", icon: User, href: "#about" },
    { label: "Experience", icon: Briefcase, href: "#experience" },
    { label: "Projects", icon: FolderGit2, href: "#projects" },
    { label: "Certifications", icon: Award, href: "#certifications" },
    { label: "Contact", icon: Mail, href: "#contact" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation - Circular Menu */}
      <nav className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 z-50">
        <div className="relative">
          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300",
              "bg-card border-2 shadow-professional hover:shadow-hover",
              isOpen 
                ? "border-primary bg-primary text-primary-foreground rotate-90" 
                : "border-border hover:border-primary"
            )}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Navigation Items - Circular Layout */}
          <div className={cn(
            "absolute left-0 top-0 transition-all duration-500",
            isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
          )}>
            {navItems.map((item, index) => {
              const angle = (index * 360) / navItems.length;
              const isActive = activeSection === item.href.replace('#', '');
              
              return (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "absolute left-0 w-10 h-10 rounded-xl transition-all duration-300",
                    "flex items-center justify-center group",
                    "bg-card border-2 shadow-card hover:shadow-professional",
                    isActive 
                      ? "border-primary bg-primary/10 text-primary scale-110" 
                      : "border-border hover:border-primary hover:scale-105"
                  )}
                  style={{
                    transform: `rotate(${angle}deg) translateX(60px) rotate(-${angle}deg)`,
                    transitionDelay: `${index * 50}ms`,
                  }}
                  aria-label={item.label}
                  title={item.label}
                >
                  <item.icon className="w-4 h-4" />
                  
                  {/* Tooltip */}
                  <span className={cn(
                    "absolute right-full mr-3 px-2 py-1 rounded-lg text-xs font-medium whitespace-nowrap",
                    "bg-card border border-border shadow-professional",
                    "opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                    "pointer-events-none"
                  )}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe">
        <div className="bg-card/95 backdrop-blur-lg border-t border-border shadow-professional">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-around py-2">
              {navItems.slice(0, 5).map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-300",
                      "min-w-[60px]",
                      isActive 
                        ? "text-primary bg-primary/10" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                    aria-label={item.label}
                  >
                    <item.icon className={cn(
                      "w-5 h-5 transition-transform",
                      isActive && "scale-110"
                    )} />
                    <span className="text-[10px] font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button - Top Right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "lg:hidden fixed top-4 right-4 z-50",
          "w-12 h-12 rounded-xl flex items-center justify-center",
          "bg-card border-2 border-border shadow-professional",
          "hover:border-primary transition-all duration-300",
          isOpen && "border-primary bg-primary text-primary-foreground"
        )}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Full Screen Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-40 transition-all duration-300",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-lg"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative h-full flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300",
                    "text-left group",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-professional" 
                      : "bg-card border border-border hover:border-primary hover:bg-primary/5"
                  )}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center transition-all",
                    isActive 
                      ? "bg-primary-foreground/20" 
                      : "bg-secondary group-hover:bg-primary/10"
                  )}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-semibold">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

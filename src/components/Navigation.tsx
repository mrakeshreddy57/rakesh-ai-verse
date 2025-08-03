import { Button } from "@/components/ui/button";
import { Home, User, Code, Briefcase, FileText, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-primary/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-cyber rounded border border-primary/50"></div>
              <span className="font-mono text-xl font-bold text-neon">RAKESH.dev</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  className={`font-mono text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10 border border-primary/30'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => {
                const mobileNav = document.getElementById('mobile-nav');
                mobileNav?.classList.toggle('translate-x-full');
              }}
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <div className="w-full h-0.5 bg-primary"></div>
                <div className="w-full h-0.5 bg-primary"></div>
                <div className="w-full h-0.5 bg-primary"></div>
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        className="fixed top-0 right-0 h-full w-64 bg-background/95 backdrop-blur-md border-l border-primary/20 z-50 transform translate-x-full transition-transform duration-300 md:hidden"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-lg font-bold text-neon">Menu</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const mobileNav = document.getElementById('mobile-nav');
                mobileNav?.classList.add('translate-x-full');
              }}
            >
              ✕
            </Button>
          </div>

          <div className="space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`w-full justify-start font-mono transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10 border border-primary/30'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
                onClick={() => {
                  scrollToSection(item.id);
                  const mobileNav = document.getElementById('mobile-nav');
                  mobileNav?.classList.add('translate-x-full');
                }}
              >
                <item.icon className="w-4 h-4 mr-3" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 bg-background/50 z-40 md:hidden opacity-0 pointer-events-none transition-opacity duration-300"
        onClick={() => {
          const mobileNav = document.getElementById('mobile-nav');
          mobileNav?.classList.add('translate-x-full');
        }}
      ></div>
    </>
  );
};

export default Navigation;
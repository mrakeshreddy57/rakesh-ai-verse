import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-dark opacity-80"></div>
      </div>
      
      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 text-primary/30 font-mono text-sm float">
        &lt;developer&gt;
      </div>
      <div className="absolute top-32 right-20 text-secondary/30 font-mono text-sm float" style={{ animationDelay: '1s' }}>
        System.out.println("Hello World");
      </div>
      <div className="absolute bottom-32 left-20 text-accent/30 font-mono text-sm float" style={{ animationDelay: '2s' }}>
        if(passion) code();
      </div>
      <div className="absolute bottom-20 right-10 text-primary/30 font-mono text-sm float" style={{ animationDelay: '3s' }}>
        &lt;/developer&gt;
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Terminal-style Greeting */}
        <div className="mb-6 font-mono text-accent text-sm">
          <span className="text-muted-foreground">$</span> whoami
        </div>
        
        {/* Name with Neon Effect */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-neon tracking-wider">
          RAKESH REDDY
        </h1>
        
        {/* Professional Tagline */}
        <div className="text-xl md:text-2xl font-mono mb-8 text-glow">
          <span className="text-primary">&lt;</span>
          Java Developer 
          <span className="text-secondary"> | </span>
          Web Enthusiast 
          <span className="text-accent"> | </span>
          AI Explorer
          <span className="text-primary">&gt;</span>
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting intelligent solutions with <span className="text-accent">Java</span> and exploring the frontiers of 
          <span className="text-primary"> GenAI</span>. Building the future, one algorithm at a time.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            className="btn-cyber group"
            onClick={() => scrollToSection('resume')}
          >
            <Download className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
            View Resume
          </Button>
          
          <Button 
            className="btn-neon"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
          
          <Button 
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            onClick={() => scrollToSection('projects')}
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Explore Projects
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className="w-8 h-8 text-primary cursor-pointer hover:text-primary-glow transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;
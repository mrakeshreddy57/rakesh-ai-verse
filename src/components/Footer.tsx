import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-primary/20">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <div className="w-8 h-8 bg-gradient-cyber rounded border border-primary/50"></div>
              <span className="font-mono text-xl font-bold text-neon">RAKESH.dev</span>
            </div>
            <p className="text-muted-foreground text-sm font-mono leading-relaxed">
              Building the future with <span className="text-primary">Java</span> and 
              <span className="text-accent"> GenAI</span>. One algorithm at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm text-accent mb-4 uppercase tracking-wider">
              // Quick Links
            </h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Resume', 'Contact'].map((link) => (
                <div key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono block"
                  >
                    {link}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-mono text-sm text-accent mb-4 uppercase tracking-wider">
              // Connect
            </h4>
            <div className="flex gap-4 justify-center md:justify-start mb-4">
              <a
                href="https://github.com/mrakeshreddy57"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted/20 border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/rakesh-reddy-b9a33a251/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted/20 border border-secondary/20 hover:border-secondary hover:bg-secondary/10 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:mrakeshreddy57@gmail.com"
                className="p-3 rounded-lg bg-muted/20 border border-accent/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="text-muted-foreground text-xs font-mono">
              mrakeshreddy57@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
              <span>© {currentYear} Rakesh Reddy. Crafted with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-primary" />
            </div>
            
            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
              <span>Built with React + TypeScript</span>
              <span className="text-primary">•</span>
              <span>Styled with Tailwind CSS</span>
              <span className="text-primary">•</span>
              <span>Hosted on Lovable</span>
            </div>
          </div>
          
          {/* Version Info */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/20 border border-primary/20 rounded-full text-xs font-mono text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>v1.0.0 - Portfolio Live</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Card } from "@/components/ui/card";
import { MapPin, GraduationCap, Code, Zap } from "lucide-react";

const AboutSection = () => {
  const funFacts = [
    { icon: Code, text: "GenAI Tinkerer", color: "text-primary" },
    { icon: Zap, text: "Cricket Lover", color: "text-secondary" },
    { icon: GraduationCap, text: "CS Student", color: "text-accent" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-accent text-sm mb-4">
            <span className="text-muted-foreground">$</span> cat about.txt
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neon mb-6">
            ABOUT_ME.exe
          </h2>
          <div className="w-32 h-1 bg-gradient-cyber mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Side */}
          <div className="relative">
            <Card className="card-cyber p-8 text-center">
              {/* Profile Image Placeholder */}
              <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-cyber p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <div className="text-6xl text-primary">👨‍💻</div>
                </div>
              </div>
              
              {/* Location Badge */}
              <div className="flex items-center justify-center gap-2 text-accent mb-4">
                <MapPin className="w-4 h-4" />
                <span className="font-mono">Nandyal, Andhra Pradesh</span>
              </div>
              
              {/* Fun Facts */}
              <div className="space-y-3">
                {funFacts.map((fact, index) => (
                  <div key={index} className="flex items-center justify-center gap-3 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    <fact.icon className={`w-5 h-5 ${fact.color}`} />
                    <span className="font-mono text-sm">{fact.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Bio Content */}
          <div className="space-y-8">
            <Card className="card-cyber p-8">
              <h3 className="text-2xl font-bold text-glow mb-6 font-mono">
                &gt; Initializing Developer Profile...
              </h3>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm <span className="text-primary font-mono">Rakesh Reddy</span>, a passionate 
                  3rd-year Computer Science student at <span className="text-secondary">Chandigarh University</span> 
                  with a deep fascination for Java development and the evolving world of GenAI.
                </p>
                
                <p>
                  My journey in tech combines <span className="text-accent">analytical thinking</span> with 
                  creative problem-solving. When I'm not crafting elegant code solutions, you'll find me 
                  exploring the latest AI trends or enjoying a good cricket match.
                </p>
                
                <p>
                  I believe in <span className="text-primary">continuous learning</span> and pushing 
                  boundaries in technology. Every project is an opportunity to innovate and create 
                  something meaningful.
                </p>
              </div>
            </Card>

            {/* Academic Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="card-cyber p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">6.5</div>
                <div className="text-sm text-muted-foreground font-mono">CGPA</div>
              </Card>
              
              <Card className="card-cyber p-6 text-center">
                <div className="text-2xl font-bold text-secondary mb-2">77%</div>
                <div className="text-sm text-muted-foreground font-mono">Intermediate</div>
              </Card>
              
              <Card className="card-cyber p-6 text-center">
                <div className="text-2xl font-bold text-accent mb-2">82%</div>
                <div className="text-sm text-muted-foreground font-mono">Matric</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
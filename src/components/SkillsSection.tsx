import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Coffee, Database, Brain, Code2, Puzzle, Search } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { name: "Java", level: 85, icon: Coffee, color: "text-orange-400" },
    { name: "HTML & CSS", level: 90, icon: Code2, color: "text-blue-400" },
    { name: "SQL", level: 75, icon: Database, color: "text-green-400" },
    { name: "GenAI", level: 70, icon: Brain, color: "text-purple-400" },
    { name: "DSA", level: 80, icon: Puzzle, color: "text-red-400" },
    { name: "Problem Solving", level: 88, icon: Search, color: "text-yellow-400" },
  ];

  const techStack = [
    "Java", "Spring Boot", "HTML5", "CSS3", "JavaScript", "SQL", "MySQL", 
    "Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "GenAI", "ChatGPT", "LangChain"
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-accent text-sm mb-4">
            <span className="text-muted-foreground">$</span> ls -la /skills/
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neon mb-6">
            SKILL_MATRIX.json
          </h2>
          <div className="w-32 h-1 bg-gradient-cyber mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Core Skills with Progress Bars */}
          <Card className="card-cyber p-8">
            <h3 className="text-2xl font-bold text-glow mb-8 font-mono">
              &gt; Core Competencies
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <skill.icon className={`w-5 h-5 ${skill.color}`} />
                      <span className="font-mono text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  
                  <div className="relative">
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                    {/* Custom glow effect */}
                    <div 
                      className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000 opacity-80"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `glow 2s ease-in-out infinite alternate`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Tech Stack Tags */}
          <Card className="card-cyber p-8">
            <h3 className="text-2xl font-bold text-glow mb-8 font-mono">
              &gt; Tech Arsenal
            </h3>
            
            <div className="space-y-6">
              <div className="font-mono text-sm text-muted-foreground mb-4">
                Technologies & Tools I work with:
              </div>
              
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <Badge 
                    key={tech}
                    variant="outline"
                    className="px-4 py-2 text-sm font-mono border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default animate-float"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              {/* Code snippet decoration */}
              <div className="mt-8 p-4 bg-muted/20 rounded-lg border border-primary/20">
                <div className="font-mono text-sm text-muted-foreground">
                  <div className="text-secondary">// Current Focus Areas</div>
                  <div className="text-foreground mt-2">
                    const interests = [<br />
                    &nbsp;&nbsp;<span className="text-primary">"Generative AI"</span>,<br />
                    &nbsp;&nbsp;<span className="text-accent">"Full-Stack Development"</span>,<br />
                    &nbsp;&nbsp;<span className="text-secondary">"Data Structures & Algorithms"</span><br />
                    ];
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Learning Philosophy */}
        <Card className="card-cyber p-8 mt-12 text-center">
          <div className="font-mono text-accent text-sm mb-4">
            while(alive) keepLearning();
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "Technology evolves rapidly, and I believe in continuous learning. Every challenge is an 
            opportunity to grow, and every project teaches something new."
          </p>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
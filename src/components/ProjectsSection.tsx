import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Smartphone, Globe, Utensils } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Crypto Store",
      description: "A modern cryptocurrency trading platform with real-time market data, portfolio tracking, and secure transaction management.",
      icon: Database,
      color: "text-yellow-400",
      tech: ["Java", "Spring Boot", "MySQL", "REST API"],
      github: "https://github.com/mrakeshreddy57",
      demo: "#",
      features: ["Real-time crypto prices", "Portfolio management", "Secure transactions"]
    },
    {
      id: 2,
      title: "Patient Medicine & Appointment Tracker",
      description: "Healthcare management system for tracking patient records, medicine schedules, and appointment bookings with automated reminders.",
      icon: Smartphone,
      color: "text-green-400",
      tech: ["Java", "MySQL", "HTML", "CSS"],
      github: "https://github.com/mrakeshreddy57",
      demo: "#",
      features: ["Patient records", "Medicine tracking", "Appointment scheduling"]
    },
    {
      id: 3,
      title: "Daily News App",
      description: "AI-powered news aggregation platform that curates personalized news feeds with category filtering and trending topics.",
      icon: Globe,
      color: "text-blue-400",
      tech: ["Java", "News API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/mrakeshreddy57",
      demo: "#",
      features: ["AI news curation", "Category filters", "Trending topics"]
    },
    {
      id: 4,
      title: "Food Recipe App",
      description: "Interactive recipe discovery platform with ingredient-based search, nutritional information, and meal planning features.",
      icon: Utensils,
      color: "text-orange-400",
      tech: ["Java", "Recipe API", "MySQL", "CSS"],
      github: "https://github.com/mrakeshreddy57",
      demo: "#",
      features: ["Recipe search", "Nutrition tracking", "Meal planning"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-accent text-sm mb-4">
            <span className="text-muted-foreground">$</span> git log --oneline
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neon mb-6">
            PROJECT_SHOWCASE.js
          </h2>
          <div className="w-32 h-1 bg-gradient-cyber mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-cyber p-6 group hover:scale-[1.02] transition-all duration-500 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-muted/20 border border-primary/20">
                    <project.icon className={`w-8 h-8 ${project.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-glow font-mono">
                      {project.title}
                    </h3>
                    <div className="text-sm text-muted-foreground font-mono">
                      project_{project.id.toString().padStart(2, '0')}.jar
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/30 hover:border-primary"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-secondary/30 hover:border-secondary"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <div className="text-sm text-accent font-mono mb-3">// Key Features:</div>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground font-mono">
                      <span className="text-primary">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Badge 
                    key={tech}
                    variant="outline"
                    className="text-xs font-mono border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <Card className="card-cyber p-8 max-w-2xl mx-auto">
            <div className="font-mono text-accent text-sm mb-4">
              // Explore more projects
            </div>
            <h3 className="text-2xl font-bold text-glow mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for additional projects, contributions, and coding experiments.
            </p>
            <Button
              className="btn-neon"
              onClick={() => window.open('https://github.com/mrakeshreddy57', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Visit GitHub Profile
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
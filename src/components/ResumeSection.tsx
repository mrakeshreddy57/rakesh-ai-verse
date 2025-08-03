import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye } from "lucide-react";

const ResumeSection = () => {
  const handleDownload = () => {
    // In a real implementation, this would download the actual resume file
    console.log("Downloading resume...");
    // For demo purposes, you would replace this with the actual resume download link
    // window.open('/path-to-resume.pdf', '_blank');
  };

  const handleView = () => {
    // In a real implementation, this would open the resume in a new tab
    console.log("Opening resume...");
    // For demo purposes, you would replace this with the actual resume viewing link
    // window.open('/path-to-resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark opacity-30"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-accent text-sm mb-4">
            <span className="text-muted-foreground">$</span> cat resume.pdf
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neon mb-6">
            RESUME.download()
          </h2>
          <div className="w-32 h-1 bg-gradient-cyber mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Preview Card */}
          <div className="lg:col-span-2">
            <Card className="card-cyber p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-glow font-mono">
                    Professional Resume
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    rakesh_reddy_resume.pdf
                  </p>
                </div>
              </div>

              {/* Resume Placeholder */}
              <div className="border-2 border-dashed border-primary/30 rounded-lg h-96 flex items-center justify-center bg-muted/10">
                <div className="text-center">
                  <FileText className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                  <h4 className="text-lg font-mono text-primary mb-2">Resume Preview</h4>
                  <p className="text-muted-foreground text-sm">
                    Interactive PDF viewer will be embedded here
                  </p>
                  <div className="mt-4 space-y-2 text-xs text-muted-foreground font-mono">
                    <div>• Complete educational background</div>
                    <div>• Technical skills & proficiencies</div>
                    <div>• Project details & achievements</div>
                    <div>• Contact information & links</div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center p-4 rounded-lg bg-muted/20 border border-primary/10">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground font-mono">Years Study</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/20 border border-secondary/10">
                  <div className="text-2xl font-bold text-secondary">4</div>
                  <div className="text-xs text-muted-foreground font-mono">Projects</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/20 border border-accent/10">
                  <div className="text-2xl font-bold text-accent">6+</div>
                  <div className="text-xs text-muted-foreground font-mono">Technologies</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/20 border border-primary/10">
                  <div className="text-2xl font-bold text-primary">1</div>
                  <div className="text-xs text-muted-foreground font-mono">Goal: Excellence</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Download Actions */}
          <div className="space-y-6">
            <Card className="card-cyber p-6">
              <h4 className="text-xl font-bold text-glow mb-6 font-mono">
                &gt; Download Resume
              </h4>
              
              <div className="space-y-4">
                <Button
                  className="w-full btn-cyber"
                  onClick={handleDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={handleView}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Online
                </Button>
              </div>

              <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-accent/20">
                <div className="font-mono text-xs text-muted-foreground">
                  <div className="text-accent mb-2">// File Info</div>
                  <div>Format: PDF</div>
                  <div>Size: ~2.1 MB</div>
                  <div>Updated: Jan 2025</div>
                  <div>Version: v3.2</div>
                </div>
              </div>
            </Card>

            {/* Resume Highlights */}
            <Card className="card-cyber p-6">
              <h4 className="text-lg font-bold text-glow mb-4 font-mono">
                &gt; Resume Highlights
              </h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-primary font-mono">Education:</span>
                    <div className="text-muted-foreground">B.Tech CSE at Chandigarh University</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-secondary font-mono">Skills:</span>
                    <div className="text-muted-foreground">Java, Web Dev, GenAI, DSA</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-accent font-mono">Projects:</span>
                    <div className="text-muted-foreground">4 Major projects showcased</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="card-cyber p-6 max-w-2xl mx-auto">
            <div className="font-mono text-accent text-sm mb-3">
              // Ready to collaborate?
            </div>
            <p className="text-muted-foreground">
              Let's discuss how my skills and passion for technology can contribute to your team's success.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
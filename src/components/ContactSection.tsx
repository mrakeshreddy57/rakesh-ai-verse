import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    // You would typically send this to a backend service
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mrakeshreddy57@gmail.com",
      link: "mailto:mrakeshreddy57@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7780104472",
      link: "tel:+917780104472",
      color: "text-secondary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "mrakeshreddy57",
      link: "https://github.com/mrakeshreddy57",
      color: "text-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "rakesh-reddy-b9a33a251",
      link: "https://www.linkedin.com/in/rakesh-reddy-b9a33a251/",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-accent text-sm mb-4">
            <span className="text-muted-foreground">$</span> ./connect.sh --establish-communication
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neon mb-6">
            CONTACT.interface()
          </h2>
          <div className="w-32 h-1 bg-gradient-cyber mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-cyber p-8">
            <h3 className="text-2xl font-bold text-glow mb-8 font-mono">
              &gt; Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-accent mb-2">
                  const yourName = 
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="bg-muted/20 border-primary/30 focus:border-primary font-mono"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-accent mb-2">
                  const emailAddress = 
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@domain.com"
                  className="bg-muted/20 border-primary/30 focus:border-primary font-mono"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-mono text-accent mb-2">
                  const message = `
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hi Rakesh, I'd like to discuss..."
                  className="bg-muted/20 border-primary/30 focus:border-primary font-mono min-h-[120px] resize-none"
                  required
                />
                <div className="text-sm font-mono text-accent mt-1">`;</div>
              </div>
              
              <Button
                type="submit"
                className="w-full btn-neon group"
              >
                <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                Execute Send()
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="card-cyber p-8">
              <h3 className="text-2xl font-bold text-glow mb-8 font-mono">
                &gt; Contact Info
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/10 border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-float"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 rounded-lg bg-muted/20 border border-primary/20 ${info.color}`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-accent font-mono">{info.label}</div>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors font-mono text-sm"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Location & Availability */}
            <Card className="card-cyber p-6">
              <h4 className="text-lg font-bold text-glow mb-4 font-mono">
                &gt; Current Status
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="font-mono text-sm">Nandyal, Andhra Pradesh, India</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="font-mono text-sm text-accent">Available for opportunities</span>
                </div>
                
                <div className="mt-4 p-3 bg-muted/20 rounded-lg border border-accent/20">
                  <div className="font-mono text-xs text-muted-foreground">
                    <div className="text-accent mb-1">// Response Time</div>
                    <div>Email: Within 24 hours</div>
                    <div>LinkedIn: Within 48 hours</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="card-cyber p-6">
              <h4 className="text-lg font-bold text-glow mb-4 font-mono">
                &gt; Let's Connect
              </h4>
              
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://github.com/mrakeshreddy57', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={() => window.open('https://www.linkedin.com/in/rakesh-reddy-b9a33a251/', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16">
          <Card className="card-cyber p-6 max-w-2xl mx-auto">
            <div className="font-mono text-accent text-sm mb-3">
              // Thank you for visiting!
            </div>
            <p className="text-muted-foreground">
              Looking forward to connecting and discussing exciting opportunities in technology and innovation.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
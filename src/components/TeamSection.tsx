import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import alisaImage from "@/assets/team-alisa.jpg";
import vanessaImage from "@/assets/team-vanessa.jpg";
import simbarasheImage from "@/assets/team-simbarashe.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alisa Adams",
      role: "Founder & CEO",
      description: "Passionate about transforming education and empowering communities through innovative programs.",
      image: alisaImage
    },
    {
      name: "Vanessa Kambasha",
      role: "Programs Manager",
      description: "Leading educational initiatives and community outreach programs across diverse regions.",
      image: vanessaImage
    },
    {
      name: "Simbarashe Mahlaulo",
      role: "M.Ed, Fdr & Collection Engineer",
      description: "Combining educational expertise with technical innovation to scale our impact.",
      image: simbarasheImage
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
            Meet Our <span className="text-primary">Visionaries</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The passionate leaders driving educational transformation and empowering communities worldwide
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Icons - appear on hover */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <button className="w-8 h-8 bg-background/90 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-background/90 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3 text-sm sm:text-base">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-semibold text-base"
          >
            View Our Full Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
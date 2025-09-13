import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import alisaImage from "@/assets/team-alisa.jpg";
import vanessaImage from "@/assets/team-vanessa.jpg";
import simbarasheImage from "@/assets/team-simbarashe.jpg";
import ContentEditor from "@/components/ContentEditor";
import { useContentEditor } from "@/hooks/useContentEditor";

const TeamSection = () => {
  const [showAll, setShowAll] = useState(false);
  const { content } = useContentEditor('team_section');

  const allTeamMembers = [
    {
      name: "Alisa Ncube",
      role: "Executive Director",
      image: alisaImage,
      bio: "Leading the foundation with vision and dedication to educational transformation."
    },
    {
      name: "David Mutamba",
      role: "Field Coordinator",
      image: alisaImage, // placeholder
      bio: "Coordinating on-ground initiatives and community outreach programs."
    },
    {
      name: "Grace Chikomo",
      role: "Finance Manager",
      image: vanessaImage, // placeholder
      bio: "Ensuring financial transparency and sustainable resource management."
    },
    {
      name: "James Nyoni",
      role: "Education Specialist",
      image: simbarasheImage, // placeholder
      bio: "Developing curriculum and educational programs for maximum impact."
    },
    {
      name: "Simbarashe Mombe",
      role: "Program Manager",
      image: simbarasheImage,
      bio: "Managing educational programs and measuring their transformative impact."
    },
    {
      name: "Vanessa Muringani",
      role: "Communications Manager",
      image: vanessaImage,
      bio: "Sharing our story and connecting with communities worldwide."
    }
  ].sort((a, b) => a.name.localeCompare(b.name));

  const displayedMembers = showAll ? allTeamMembers : allTeamMembers.slice(0, 3);

  return (
    <ContentEditor sectionKey="team_section" sectionName="Team Section">
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 animate-fade-in">{content?.title || 'Meet Our Team'}</h2>
          <p className="text-sm sm:text-base text-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            {content?.description || 'Our dedicated team is committed to restoring dignity and creating lasting change in education across Zimbabwe.'}
          </p>

        <div className="grid gap-6 sm:gap-8 mb-8 sm:mb-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {displayedMembers.map((member, index) => (
            <div 
              key={member.name} 
              className="bg-card rounded-xl p-6 text-center group hover-scale animate-fade-in shadow-lg hover:shadow-xl transition-all duration-300 border border-border/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 flex justify-center">
                <div className="relative overflow-hidden rounded-full p-1 bg-gradient-to-r from-primary/20 to-secondary/20">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground transition-colors duration-300 group-hover:text-primary">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="text-xs sm:text-sm text-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button 
            onClick={() => setShowAll(!showAll)}
            variant="outline" 
            className="border-foreground text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 px-8 py-3 rounded-full font-medium"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                View All Team ({allTeamMembers.length})
              </>
            )}
          </Button>
          
          {!showAll && (
            <p className="text-sm text-muted-foreground animate-fade-in">
              Showing {displayedMembers.length} of {allTeamMembers.length} team members
            </p>
          )}
        </div>
        </div>
      </section>
    </ContentEditor>
  );
};

export default TeamSection;
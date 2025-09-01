import { Button } from "@/components/ui/button";
import alisaImage from "@/assets/team-alisa.jpg";
import vanessaImage from "@/assets/team-vanessa.jpg";
import simbarasheImage from "@/assets/team-simbarashe.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alisa Adams",
      role: "Founder",
      image: alisaImage
    },
    {
      name: "Vanessa Kambasha",
      role: "Programs Manager",
      image: vanessaImage
    },
    {
      name: "Simbarashe Mahlaulo",
      role: "M.Ed, Fdr & CollectionEngineer",
      image: simbarasheImage
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">Meet the Team</h2>
        <p className="text-sm sm:text-base text-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          They are the hands that lift, the hearts that serve, the spirits behind Future Wings Foundation's success.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4 flex justify-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{member.name}</h3>
              <p className="text-sm sm:text-base" style={{ color: 'hsl(var(--foundation-blue))' }}>{member.role}</p>
            </div>
          ))}
        </div>

        <Button 
          variant="outline" 
          className="border-foreground text-foreground w-full sm:w-auto"
          style={{ 
            '--hover-bg': 'hsl(var(--foundation-blue))',
            '--hover-text': 'hsl(var(--foundation-white))'
          } as React.CSSProperties}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'hsl(var(--foundation-blue))';
            e.currentTarget.style.color = 'hsl(var(--foundation-white))';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'hsl(var(--foreground))';
          }}
        >
          VIEW ALL
        </Button>
      </div>
    </section>
  );
};

export default TeamSection;
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">Meet the Team</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          They are the hands that lift, the hearts that serve, the spirits behind Future Wings Foundation's success.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-64 h-64 object-cover rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>

        <Button 
          variant="outline" 
          className="border-foreground text-foreground hover:bg-foreground hover:text-background"
        >
          VIEW ALL
        </Button>
      </div>
    </section>
  );
};

export default TeamSection;
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import classroomImage from "@/assets/classroom-scene.jpg";

const ChangeSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-background">
            <h2 className="text-4xl font-bold mb-6">
              Be Part of A Change<br />
              You Want To See In The World
            </h2>
            <p className="text-lg mb-4 opacity-90">
              "Education is the most powerful weapon which you can use to change the world." — Nelson Mandela
            </p>
            <p className="mb-8 opacity-80">
              Future Wings Foundation, based in Zimbabwe, is a nonprofit organization committed to empowering underserved children through education. We believe that every child deserves the support necessary for a thriving educational journey.
            </p>
            <Button 
              variant="outline" 
              className="border-background text-background hover:bg-background hover:text-primary"
            >
              MORE ABOUT US
            </Button>
          </div>

          {/* Right content - Images/Videos */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src={classroomImage} 
                  alt="Children in classroom" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-foreground/20 rounded-lg hover:bg-foreground/30 transition-colors">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-foreground ml-1" />
                  </div>
                </button>
              </div>
              <div className="relative">
                <img 
                  src={classroomImage} 
                  alt="Students learning" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-foreground/20 rounded-lg hover:bg-foreground/30 transition-colors">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-foreground ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangeSection;
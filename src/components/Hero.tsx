import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center text-background max-w-4xl">
          <p className="text-sm mb-4 opacity-90">At Future Wings Foundation</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            WE BELIEVE EVERY CHILD DESERVES<br />
            THE OPPORTUNITY TO A <span className="text-primary">QUALITY<br />
            EDUCATION.</span>
          </h1>
          <Button 
            size="lg" 
            className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-foreground px-8 py-3 text-lg font-semibold"
          >
            DONATE NOW
          </Button>
        </div>
      </div>

      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-background hover:text-primary transition-colors">
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-background hover:text-primary transition-colors">
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-background"></div>
        <div className="w-3 h-3 rounded-full bg-background/50"></div>
        <div className="w-3 h-3 rounded-full bg-background/50"></div>
      </div>
    </section>
  );
};

export default Hero;
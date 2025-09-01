import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-foreground text-background py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>When You Give A Child Learns, Contribute Today, Shape Tomorrow</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@futurewingsfoundation.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+263 788883462</span>
            </div>
            <div className="flex items-center space-x-2">
              <Facebook className="w-4 h-4" />
              <Instagram className="w-4 h-4" />
              <Linkedin className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-foreground">
            Future Wings Foundation
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Our Impact</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contact Us</a>
            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
              DONATE NOW
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
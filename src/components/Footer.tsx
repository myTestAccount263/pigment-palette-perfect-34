import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Impact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Pages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Impact Reports</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Annual Reports</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Harare, Zimbabwe</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+263 788883462</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@futurewingsfoundation.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4 opacity-90">
              Subscribe to get updates on our recent information to our community programs, and volunteers.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your Email Address"
                className="bg-background text-foreground"
              />
              <Button 
                variant="secondary" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                SEND NOW
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/20 py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold">FW</span>
            </div>
            <span className="text-sm">When You Give A Child Learns, Learn More Today, Shape Tomorrow</span>
          </div>
          <div className="text-sm opacity-75">
            Copyright © 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

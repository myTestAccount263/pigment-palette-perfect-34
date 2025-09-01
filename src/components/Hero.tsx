import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-children.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: heroImage,
      title: "WE BELIEVE EVERY CHILD DESERVES THE OPPORTUNITY TO A QUALITY EDUCATION.",
      subtitle: "At Future Wings Foundation"
    },
    {
      image: heroImage,
      title: "EMPOWERING YOUNG MINDS FOR A BRIGHTER TOMORROW.",
      subtitle: "Building Futures Together"
    },
    {
      image: heroImage,
      title: "EDUCATION IS THE KEY TO UNLOCKING POTENTIAL.",
      subtitle: "Transforming Lives Through Learning"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[calc(100vh-80px)] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-foreground/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-background max-w-5xl">
          <p className="text-xs sm:text-sm mb-2 sm:mb-4 opacity-90">{slides[currentSlide].subtitle}</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            {slides[currentSlide].title.split('QUALITY').map((part, index) => (
              index === 0 ? part : (
                <span key={index}>
                  <span className="text-primary">QUALITY</span>
                  {part}
                </span>
              )
            ))}
          </h1>
          <Button 
            variant="rounded"
            size="lg" 
            className="text-background px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold"
          >
            DONATE NOW
          </Button>
        </div>
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-background hover:text-primary transition-colors p-2 hover:bg-background/10 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-background hover:text-primary transition-colors p-2 hover:bg-background/10 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-background' : 'bg-background/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
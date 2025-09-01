import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChangeSection from "@/components/ChangeSection";
import ImpactSection from "@/components/ImpactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ChangeSection />
      <ImpactSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;

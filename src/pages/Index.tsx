import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChangeSection from "@/components/ChangeSection";
import ImpactSection from "@/components/ImpactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";
import EditingIndicator from "@/components/EditingIndicator";
import { EditModeProvider } from "@/hooks/useEditMode";

const Index = () => {
  return (
    <EditModeProvider>
      <div className="min-h-screen">
        <AdminPanel />
        <EditingIndicator />
        <Header />
        <Hero />
        <ChangeSection />
        <ImpactSection />
        <TeamSection />
        <Footer />
      </div>
    </EditModeProvider>
  );
};

export default Index;

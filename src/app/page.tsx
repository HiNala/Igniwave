import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TrustSection from "@/components/sections/TrustSection";
import PrivacySection from "@/components/sections/PrivacySection";
import WaitlistSection from "@/components/sections/WaitlistSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <TrustSection />
        <PrivacySection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}

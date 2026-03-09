import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Trust from "@/components/sections/Testimonials";
import Waitlist from "@/components/sections/Waitlist";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <Trust />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

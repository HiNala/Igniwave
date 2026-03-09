import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Trust from "@/components/sections/Testimonials";
import Waitlist from "@/components/sections/Waitlist";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Trust />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

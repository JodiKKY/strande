import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Braids from "@/components/Braids";
import HowItWorks from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#F8F1E9] text-[#3B2A1E]">
      <Navbar />
      <Hero />
      <Features />
      <Braids />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
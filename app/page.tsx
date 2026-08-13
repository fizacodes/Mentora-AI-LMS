import AIShowcase from "./components/AIShowcase";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWork";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
  <main className="min-h-screen bg-[#061521]">

      <Navbar/>
      <Hero/> 
      <Features/>
      <HowItWorks/>
      <AIShowcase/>
      <Contact/>
    </main>
  );
}

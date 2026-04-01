import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <HowItWorks />
      <Stats />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

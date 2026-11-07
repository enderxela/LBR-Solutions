import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import FlagshipCase from "@/components/FlagshipCase";
import Services from "@/components/Services";
import Estimator from "@/components/Estimator";
import About from "@/components/About";
import WebDev from "@/components/WebDev";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <FlagshipCase />
        <Services />
        <Estimator />
        <About />
        <WebDev />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

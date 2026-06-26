import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WebDev from "@/components/WebDev";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Estimator from "@/components/Estimator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WebDev />
        <Portfolio />
        <Process />
        <About />
        <Reviews />
        <Estimator />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

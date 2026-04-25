import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Roadshow from "./components/Roadshow";
import Contact from "./components/Contact";
import SeoFaq from "./components/SeoFaq";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="relative bg-brand-bg text-brand-text">
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <MarqueeStrip />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Testimonials />
        <Roadshow />
        <SeoFaq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

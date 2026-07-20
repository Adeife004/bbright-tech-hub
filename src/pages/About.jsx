import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar.jsx";
import AboutHero from "../components/AboutHero.jsx";
import AboutIntro from "../components/AboutIntro.jsx";
import AboutFoundation from "../components/AboutFoundation.jsx";
import AboutTeam from "../components/AboutTeam.jsx";
import AboutWhyUs from "../components/AboutWhyUs.jsx";
import AboutCTA from "../components/AboutCTA.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

function About() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);

  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutIntro />
      <AboutFoundation />
      <AboutTeam />
      <AboutWhyUs />
      <AboutCTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default About;

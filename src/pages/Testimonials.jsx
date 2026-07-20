import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar.jsx";
import TestimonialsHero from "../components/TestimonialsHero.jsx";
import TestimonialsGrid from "../components/TestimonialsGrid.jsx";
import TestimonialsCTA from "../components/TestimonialsCTA.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

function TestimonialsPage() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);

  return (
    <>
      <Navbar />
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsCTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default TestimonialsPage;

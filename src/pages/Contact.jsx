import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar.jsx";
import ContactHero from "../components/ContactHero.jsx";
import ContactForm from "../components/ContactForm.jsx";
import ContactInfo from "../components/ContactInfo.jsx";
import ContactMap from "../components/ContactMap.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);

  return (
    <>
      <Navbar />
      <ContactHero />

      <div className="contact-main">
        <ContactForm />
        <ContactInfo />
      </div>

      <ContactMap />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Contact;

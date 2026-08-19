import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "./StemShop.css";

/* PLACEHOLDER: replace with your real WhatsApp number/catalogue link.
   Format: https://wa.me/<countrycode><number> with no + or spaces,
   e.g. https://wa.me/2348012345678 */
const WHATSAPP_CATALOGUE_LINK = "https://wa.me/c/2348054264981";

/* PLACEHOLDER CATALOG: names, descriptions and prices below are
   illustrative only. Replace with your real kit list and confirmed
   pricing before this page is considered final.

   IMAGES: set `image` to the path of your photo (e.g. a file placed
   in /public/assets/kits/beginner-kit.jpg would be
   "/assets/kits/beginner-kit.jpg"). Leave it null and the card
   will show an "Add photo" placeholder instead. */
const LEVEL_CLASS = {
  Beginner: "ss-level--beginner",
  Intermediate: "ss-level--intermediate",
  Advanced: "ss-level--advanced",
};

const PRODUCTS = [
  {
    icon: "fa-solid fa-robot",
    image: null,
    title: "Beginner Robotics Starter Kit",
    level: "Beginner",
    desc: "Everything needed to build a first simple robot, including motors, sensors and a beginner-friendly guide.",
    price: "₦XX,XXX",
  },
  {
    icon: "fa-solid fa-microchip",
    image: null,
    title: "Arduino Building Kit",
    level: "Beginner",
    desc: "Arduino board, breadboard, wires and core components for classroom or home projects.",
    price: "₦XX,XXX",
  },
  {
    icon: "fa-solid fa-route",
    image: null,
    title: "Line-Follower Robot Kit",
    level: "Intermediate",
    desc: "Build a robot that follows a line using infrared sensors — a favourite first competition project.",
    price: "₦XX,XXX",
  },
  {
    icon: "fa-solid fa-satellite-dish",
    image: null,
    title: "Sensor Expansion Pack",
    level: "Intermediate",
    desc: "Ultrasonic, infrared and light sensors to expand any existing robotics kit.",
    price: "₦XX,XXX",
  },
  {
    icon: "fa-solid fa-hand",
    image: null,
    title: "Robotic Arm Kit",
    level: "Advanced",
    desc: "Build and program a multi-joint robotic arm capable of picking and placing objects.",
    price: "₦XX,XXX",
  },
  {
    icon: "fa-solid fa-trophy",
    image: null,
    title: "Competition-Ready Kit",
    level: "Advanced",
    desc: "A complete kit with everything needed to build and compete in robotics challenges.",
    price: "₦XX,XXX",
  },
];

function StemShopHero() {
  return (
    <section className="ss-hero">
      <div className="ss-hero__orb ss-hero__orb--1" aria-hidden="true"></div>
      <div className="ss-hero__orb ss-hero__orb--2" aria-hidden="true"></div>
      <div className="ss-hero__grid" aria-hidden="true"></div>

      <div className="ss-hero__inner">
        <span className="ss-eyebrow">
          <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
          STEM Shop
        </span>

        <h1>
          Bring <span className="ss-title-accent">Robotics</span> Home
        </h1>

        <p>
          Robotics kits for practising what you've learned, gifting a curious
          builder, or setting up a school lab — from first-timer to
          competition-ready.
        </p>
      </div>
    </section>
  );
}

function StemShopWhatsApp() {
  return (
    <div className="ss-whatsapp">
      <div className="ss-whatsapp__inner">
        <div className="ss-whatsapp__text">
          <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
          <span>Looking for more kits? Our full catalogue is on WhatsApp.</span>
        </div>
        <a
          href={WHATSAPP_CATALOGUE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="ss-whatsapp__btn"
        >
          Open WhatsApp Catalogue{" "}
          <i
            className="fa-solid fa-arrow-up-right-from-square"
            aria-hidden="true"
          ></i>
        </a>
      </div>
    </div>
  );
}

function StemShopNotice() {
  return (
    <div className="ss-notice">
      <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
      Prices shown are illustrative placeholders. Contact us for current pricing
      and availability.
    </div>
  );
}

function StemShopGrid() {
  return (
    <section className="ss-products">
      <div className="ss-products__grid">
        {PRODUCTS.map((product, i) => (
          <article
            key={product.title}
            className="ss-card"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={i * 70}
          >
            <div className="ss-card__image">
              {product.image ? (
                <img src={product.image} alt={product.title} />
              ) : (
                <div className="ss-card__image-placeholder">
                  <i className="fa-solid fa-camera" aria-hidden="true"></i>
                  <span>Add photo</span>
                </div>
              )}
              <span
                className={`ss-level ss-level--floating ${LEVEL_CLASS[product.level]}`}
              >
                {product.level}
              </span>
            </div>

            <div className="ss-card__body">
              <div className="ss-card__top">
                <span className="ss-card__icon">
                  <i className={product.icon} aria-hidden="true"></i>
                </span>
              </div>

              <h3>{product.title}</h3>
              <p>{product.desc}</p>

              <div className="ss-card__footer">
                <span className="ss-card__price">{product.price}</span>
                <Link to="/contact" className="ss-card__cta">
                  Contact Us to Purchase{" "}
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function StemShop() {
  useEffect(() => {
    AOS.init({ once: true, offset: 60 });
  }, []);

  return (
    <>
      <Navbar />
      <StemShopHero />
      <StemShopWhatsApp />
      <StemShopNotice />
      <StemShopGrid />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default StemShop;

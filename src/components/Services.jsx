import { Link } from "react-router-dom";
import "./Services.css";

// ── Grouped by the same categories as the mega menu ──────────────
const serviceGroups = [
  {
    groupLabel: "Tech Skills Training",
    groupIcon: "fa-solid fa-laptop-code",
    services: [
      {
        icon: "fa-solid fa-computer",
        tag: null,
        tagVariant: "",
        title: "Digital Literacy",
        desc: "Build essential computer skills for the modern world — from basic operations to internet safety and productivity tools.",
        bullets: [
          "Computer fundamentals",
          "Internet & email skills",
          "Office productivity tools",
        ],
        duration: "4 weeks",
        featured: false,
        href: "/digital-literacy",
      },
      {
        icon: "fa-solid fa-code",
        tag: "Most Popular",
        tagVariant: "",
        title: "Web Development",
        desc: "Build modern, responsive websites and web apps from scratch. HTML, CSS, JavaScript, and beyond.",
        bullets: [
          "HTML, CSS & JavaScript",
          "Responsive design",
          "Real project portfolio",
        ],
        duration: "12 weeks",
        featured: true,
        href: "/web-development",
      },
      {
        icon: "fa-solid fa-pen-ruler",
        tag: null,
        tagVariant: "",
        title: "UI/UX Design",
        desc: "Design beautiful, user-friendly digital experiences. Learn industry tools like Figma and the full design process.",
        bullets: [
          "Figma & design tools",
          "User research",
          "Prototyping & wireframing",
        ],
        duration: "8 weeks",
        featured: false,
        href: "/ui-ux-design",
      },
      {
        icon: "fa-solid fa-chart-bar",
        tag: null,
        tagVariant: "",
        title: "Data Analysis",
        desc: "Turn raw data into clear insights. Learn spreadsheets, Python basics, and how to visualise data that tells a story.",
        bullets: [
          "Excel & Google Sheets",
          "Python basics",
          "Data visualisation",
        ],
        duration: "8 weeks",
        featured: false,
        href: "/data-analysis",
      },
      {
        icon: "fa-solid fa-wand-magic-sparkles",
        tag: "New",
        tagVariant: "gold",
        title: "Vibe Coding",
        desc: "Learn to build real projects using AI-assisted coding tools. The fastest way to go from idea to working product.",
        bullets: [
          "AI-powered development",
          "Prompt engineering",
          "Ship real projects fast",
        ],
        duration: "6 weeks",
        featured: false,
        href: "/vibe-coding",
      },
    ],
  },
  {
    groupLabel: "Emerging Technologies",
    groupIcon: "fa-solid fa-robot",
    services: [
      {
        icon: "fa-solid fa-robot",
        tag: null,
        tagVariant: "",
        title: "Robotics",
        desc: "Hands-on robotics training covering hardware assembly, sensors, and programming robots to complete real tasks.",
        bullets: [
          "Robot assembly & sensors",
          "Programming logic",
          "Competitions & challenges",
        ],
        duration: "10 weeks",
        featured: false,
        href: "/robotics",
      },
      {
        icon: "fa-solid fa-vr-cardboard",
        tag: null,
        tagVariant: "",
        title: "VR & AR",
        desc: "Explore virtual and augmented reality — build immersive experiences using modern XR tools and platforms.",
        bullets: ["VR scene design", "AR app basics", "Immersive storytelling"],
        duration: "8 weeks",
        featured: false,
        href: "/vr-ar",
      },
      {
        icon: "fa-solid fa-gamepad",
        tag: null,
        tagVariant: "",
        title: "Game Development",
        desc: "Design and build your own games from scratch. Game logic, character design, and publishing to real platforms.",
        bullets: [
          "Game design principles",
          "Scratch & Unity basics",
          "Publish your own game",
        ],
        duration: "10 weeks",
        featured: false,
        href: "/game-development",
      },
    ],
  },
  {
    groupLabel: "Creative Media",
    groupIcon: "fa-solid fa-cube",
    services: [
      {
        icon: "fa-solid fa-cube",
        tag: null,
        tagVariant: "",
        title: "3D Modelling",
        desc: "Create stunning 3D objects, characters and environments using industry-standard modelling software.",
        bullets: [
          "Blender fundamentals",
          "3D sculpting & texturing",
          "Rendering & export",
        ],
        duration: "8 weeks",
        featured: false,
        href: "/3d-modelling",
      },
      {
        icon: "fa-solid fa-film",
        tag: null,
        tagVariant: "",
        title: "2D Animation",
        desc: "Bring characters and stories to life through frame-by-frame animation and motion graphics techniques.",
        bullets: [
          "Animation principles",
          "Digital drawing tools",
          "Short film production",
        ],
        duration: "8 weeks",
        featured: false,
        href: "/2d-animation",
      },
    ],
  },
  {
    groupLabel: "School Solutions",
    groupIcon: "fa-solid fa-school",
    services: [
      {
        icon: "fa-solid fa-school",
        tag: null,
        tagVariant: "",
        title: "In-School Coding",
        desc: "We bring structured coding programmes directly into your school, aligned with curriculum goals.",
        bullets: [
          "Curriculum-aligned",
          "Beginner to advanced",
          "Regular assessments",
        ],
        duration: "Term-based",
        featured: false,
        href: "/in-school-coding",
      },
      {
        icon: "fa-solid fa-gears",
        tag: null,
        tagVariant: "",
        title: "In-School Robotics",
        desc: "Full robotics programme delivered in school — kits, lesson plans, and qualified instructors included.",
        bullets: [
          "Kits & materials included",
          "Qualified instructors",
          "Inter-school competitions",
        ],
        duration: "Term-based",
        featured: false,
        href: "/in-school-robotics",
      },
      {
        icon: "fa-solid fa-chalkboard-user",
        tag: null,
        tagVariant: "",
        title: "Teacher Training",
        desc: "Equip your teachers with the skills to confidently deliver tech and coding lessons in the classroom.",
        bullets: [
          "Hands-on workshops",
          "Lesson plan templates",
          "Ongoing support",
        ],
        duration: "2 weeks",
        featured: false,
        href: "/teacher-training",
      },
      {
        icon: "fa-solid fa-comments",
        tag: null,
        tagVariant: "",
        title: "Educational Consultation",
        desc: "Strategic advice to help schools plan, launch, and scale technology education programmes effectively.",
        bullets: [
          "Curriculum audit",
          "Tech roadmap planning",
          "Implementation support",
        ],
        duration: "Flexible",
        featured: false,
        href: "/educational-consultation",
      },
    ],
  },
];

function ServiceCard({ service, delay }) {
  const cardClass = ["svc-card", service.featured ? "svc-card--featured" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={cardClass}
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={delay}
    >
      <div className="svc-card__icon-wrap" aria-hidden="true">
        <i className={service.icon}></i>
      </div>

      {service.tag && (
        <div
          className={`svc-card__tag ${service.tagVariant === "gold" ? "svc-card__tag--gold" : ""}`}
        >
          {service.tag}
        </div>
      )}

      <h3 className="svc-card__title">{service.title}</h3>
      <p className="svc-card__desc">{service.desc}</p>

      <ul className="svc-card__bullets" aria-label="Topics covered">
        {service.bullets.map((b) => (
          <li key={b}>
            <i className="fa-solid fa-check" aria-hidden="true"></i> {b}
          </li>
        ))}
      </ul>

      <div className="svc-card__footer">
        <span className="svc-card__duration">
          <i className="fa-regular fa-clock" aria-hidden="true"></i>{" "}
          {service.duration}
        </span>
        <Link to={service.href} className="svc-card__link">
          Learn more{" "}
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </article>
  );
}

function Services() {
  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-heading"
    >
      <div
        className="services__header"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <span className="section-eyebrow">
          <span className="eyebrow-line" aria-hidden="true"></span>
          What We Offer
          <span className="eyebrow-line" aria-hidden="true"></span>
        </span>
        <h2 id="services-heading">
          Programmes Built for the <span className="text-teal">Real World</span>
        </h2>
        <p>
          Every track is designed around what students and employers actually
          need — from digital basics to cutting-edge tech.
        </p>
      </div>

      {/* Render each category group with a label, then its cards */}
      {serviceGroups.map((group) => (
        <div key={group.groupLabel} className="services__group">
          <div
            className="services__group-label"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <i className={group.groupIcon} aria-hidden="true"></i>
            {group.groupLabel}
          </div>

          <div className="services__grid">
            {group.services.map((svc, i) => (
              <ServiceCard key={svc.title} service={svc} delay={i * 80} />
            ))}
          </div>
        </div>
      ))}

      {/* CTA card at the bottom */}
      <div
        className="services__grid services__cta-row"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <article
          className="svc-card svc-card--cta"
          aria-label="View all programmes"
        >
          <i
            className="fa-solid fa-graduation-cap svc-card--cta__icon"
            aria-hidden="true"
          ></i>
          <h3>Ready to get started?</h3>
          <p>
            Browse all our programmes and find the right fit for your goals and
            schedule.
          </p>
          <Link to="/programmes" className="btn-apply">
            View All Programmes{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default Services;

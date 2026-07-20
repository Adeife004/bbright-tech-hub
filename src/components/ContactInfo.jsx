import "./ContactInfo.css";

const INFO_ITEMS = [
  {
    icon: "fa-solid fa-phone",
    label: "Phone",
    content: "+234 805 426 4981",
    href: "tel:+2348054264981",
  },
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    content: "bbrightkidsconsult@gmail.com",
    href: "mailto:bbrightkidsconsult@gmail.com",
  },
  {
    icon: "fa-solid fa-map-marker-alt",
    label: "Address",
    content: "19 Gbola Onibiyo Ahmadiyyah,\nLagos, Nigeria",
    href: "https://maps.google.com/?q=19+Gbola+Onibiyo+St,+Ahmadiyya,+Lagos",
  },
  {
    icon: "fa-solid fa-clock",
    label: "Hours",
    content: "Mon – Sat: 9AM – 6PM\nSunday: Closed",
    href: null,
  },
];

const SOCIALS = [
  { icon: "fa-brands fa-facebook-f", href: "#", label: "Facebook" },
  { icon: "fa-brands fa-instagram", href: "#", label: "Instagram" },
  { icon: "fa-brands fa-linkedin-in", href: "#", label: "LinkedIn" },
  { icon: "fa-brands fa-x-twitter", href: "#", label: "X / Twitter" },
];

function ContactInfo() {
  return (
    <div className="contact-info-card">
      <div className="contact-info-card__header">
        <h2>
          Contact <span>Information</span>
        </h2>
        <p>Multiple ways to reach us — pick whichever works best for you.</p>
      </div>

      <div className="contact-info__items">
        {INFO_ITEMS.map((item) => (
          <div className="contact-info__item" key={item.label}>
            <div className="contact-info__icon-wrap" aria-hidden="true">
              <i className={item.icon}></i>
            </div>
            <div className="contact-info__text">
              <h3 className="contact-info__label">{item.label}</h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="contact-info__value contact-info__value--link"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.content}
                </a>
              ) : (
                <p className="contact-info__value">{item.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="contact-info__socials">
        <h3 className="contact-info__socials-title">Follow Us</h3>
        <div className="contact-info__social-icons">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="contact-info__social"
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={s.icon} aria-hidden="true"></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

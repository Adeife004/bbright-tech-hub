import "./ContactMap.css";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.840468821332!2d3.295080473808513!3d6.666682421485315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b972773d9d1d1%3A0xe6495917b44c5500!2s19%20Gbola%20Onibiyo%20St%2C%20Ahmadiyya%20St%2C%20Ifako-Ijaiye%2C%20Lagos%20101232%2C%20Lagos!5e0!3m2!1sen!2sng!4v1781875641902!5m2!1sen!2sng";

const DIRECTIONS_URL =
  "https://www.google.com/maps/place/19+Gbola+Onibiyo+St,+Ahmadiyya+St,+Ifako-Ijaiye,+Lagos+101232,+Lagos/@6.6666771,3.2976554,17z";

function ContactMap() {
  return (
    <section className="contact-map-section">
      <div className="contact-map-card">
        <div className="contact-map-card__header">
          <div className="contact-map-card__title-row">
            <div>
              <h2>
                Find <span>Us Here</span>
              </h2>
              <p>19 Gbola Onibiyo Ahmadiyyah, Lagos, Nigeria</p>
            </div>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-card__directions"
            >
              <i
                className="fa-solid fa-location-crosshairs"
                aria-hidden="true"
              ></i>
              Get Directions
            </a>
          </div>
        </div>

        <div className="contact-map-card__iframe-wrap">
          <iframe
            src={MAP_SRC}
            title="B Bright Tech Hub location on Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactMap;

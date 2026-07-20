import { useState, useEffect } from "react";
import "./LoginBrandPanel.css";

const FULL_TEXT = "B Bright Tech Hub";
const TYPE_SPEED = 90;

const perks = [
  "Access all programme materials",
  "Track your learning progress",
  "Connect with your cohort",
  "Download your certificates",
];

function LoginBrandPanel() {
  const [wordmark, setWordmark] = useState("");

  useEffect(() => {
    let i = 0;
    let timeoutId;

    function typeNext() {
      if (i <= FULL_TEXT.length) {
        setWordmark(FULL_TEXT.slice(0, i));
        i++;
        timeoutId = setTimeout(typeNext, TYPE_SPEED);
      }
    }

    timeoutId = setTimeout(typeNext, 400);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="brand-panel" aria-hidden="true">
      <div className="brand-panel__inner">
        <div className="brand-panel__wordmark">
          <span className="wordmark-type">{wordmark}</span>
          <span className="wordmark-cursor" aria-hidden="true">
            |
          </span>
        </div>

        <h1 className="brand-panel__headline">
          Build the
          <br />
          <span className="brand-panel__accent">future</span>
          <br />
          with code.
        </h1>

        <p className="brand-panel__sub">
          Join 2,400+ graduates who turned ambition into a tech career.
        </p>

        <ul className="brand-panel__perks">
          {perks.map((perk) => (
            <li key={perk}>
              <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
              {perk}
            </li>
          ))}
        </ul>
      </div>

      <div className="code-snippet" aria-hidden="true">
        <span className="cs-line">
          <span className="cs-kw">const</span>{" "}
          <span className="cs-var">career</span> ={" "}
          <span className="cs-fn">BBright</span>
          <span className="cs-p">(</span>
          <span className="cs-str">'you'</span>
          <span className="cs-p">);</span>
        </span>
        <span className="cs-line">
          <span className="cs-var">career</span>
          <span className="cs-p">.</span>
          <span className="cs-fn">launch</span>
          <span className="cs-p">();</span>
        </span>
        <span className="cs-line cs-comment">{"// 🚀 success"}</span>
      </div>
    </div>
  );
}

export default LoginBrandPanel;

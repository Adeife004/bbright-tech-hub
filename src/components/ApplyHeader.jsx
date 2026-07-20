import { useState, useEffect } from "react";
import "./ApplyHeader.css";

const FULL_TEXT = "B Bright Tech Hub";
const TYPE_SPEED = 90;

function ApplyHeader() {
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
    <div className="apply-header">
      <div className="apply-header__wordmark">
        <span className="apply-wordmark-type">{wordmark}</span>
        <span className="apply-wordmark-cursor" aria-hidden="true">
          |
        </span>
      </div>
      <h1>
        Let's Start <span className="apply-text-accent">Something</span>
      </h1>
      <p>
        Whether you're here to learn or here to build — we want you on the team.
      </p>
    </div>
  );
}

export default ApplyHeader;

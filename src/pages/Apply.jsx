import { useState } from "react";
import { Link } from "react-router-dom";

import ApplyAurora from "../components/ApplyAurora.jsx";
import LoginTerminalBg from "../components/LoginTerminalBg.jsx";
import ApplyHeader from "../components/ApplyHeader.jsx";
import ApplyPathSelector from "../components/ApplyPathSelector.jsx";
import ApplyStudentForm from "../components/ApplyStudentForm.jsx";
import ApplyWorkForm from "../components/ApplyWorkForm.jsx";
import ApplySuccess from "../components/ApplySuccess.jsx";

import "./Apply.css";

function Apply() {
  // 'selector' | 'learn' | 'work' | 'success'
  const [view, setView] = useState("selector");
  const [successData, setSuccess] = useState({ title: "", text: "" });

  function handleSuccess(title, text) {
    setSuccess({ title, text });
    setView("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleBack() {
    setView("selector");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="apply-page">
      <ApplyAurora />
      <LoginTerminalBg />

      <Link
        to="/"
        className="apply-home-icon"
        aria-label="Back to homepage"
        title="Back to homepage"
      >
        <i className="fa-solid fa-house" aria-hidden="true"></i>
      </Link>

      <main className="apply-wrap">
        <ApplyHeader />

        {view === "selector" && <ApplyPathSelector onSelect={setView} />}

        {view === "learn" && (
          <ApplyStudentForm onBack={handleBack} onSuccess={handleSuccess} />
        )}

        {view === "work" && (
          <ApplyWorkForm onBack={handleBack} onSuccess={handleSuccess} />
        )}

        {view === "success" && (
          <ApplySuccess title={successData.title} text={successData.text} />
        )}
      </main>
    </div>
  );
}

export default Apply;

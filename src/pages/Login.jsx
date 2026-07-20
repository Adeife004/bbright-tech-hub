import { Link } from "react-router-dom";
import LoginCanvas from "../components/LoginCanvas.jsx";
import LoginTerminalBg from "../components/LoginTerminalBg.jsx";
import LoginBrandPanel from "../components/LoginBrandPanel.jsx";
import LoginCard from "../components/LoginCard.jsx";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <LoginCanvas />
      <LoginTerminalBg />

      <Link
        to="/"
        className="home-icon"
        aria-label="Back to homepage"
        title="Back to homepage"
      >
        <i className="fa-solid fa-house" aria-hidden="true"></i>
      </Link>

      <main className="login-wrap">
        <LoginBrandPanel />
        <LoginCard />
      </main>
    </div>
  );
}

export default Login;

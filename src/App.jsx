import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Programmes from "./pages/Programmes.jsx";
import Login from "./pages/Login.jsx";
import Apply from "./pages/Apply.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./components/Services.jsx";
import DigitalLiteracy from "./pages/DigitalLiteracy.jsx";
import UiUxDesign from "./pages/UiUxDesign.jsx";
import WebDevelopment from "./pages/WebDevelopment.jsx";
import DataAnalysis from "./pages/DataAnalysis.jsx";
import VibeCoding from "./pages/VibeCoding.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programmes" element={<Programmes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/digital-literacy" element={<DigitalLiteracy />} />
      <Route path="/ui-ux-design" element={<UiUxDesign />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/data-analysis" element={<DataAnalysis />} />
      <Route path="/vibe-coding" element={<VibeCoding />} />
    </Routes>
  );
}

export default App;

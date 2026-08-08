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
import Robotics from "./pages/Robotics.jsx";
import VrAr from "./pages/VrAr.jsx";
import GameDevelopment from "./pages/GameDevelopment.jsx";
import Modelling3D from "./pages/Modelling3D.jsx";
import Animation2D from "./pages/Animation2D.jsx";
import WeekendClasses from "./pages/WeekendClasses.jsx";
import HolidayClasses from "./pages/HolidayClasses.jsx";
import JulyOfTech    from './pages/JulyOfTech.jsx'
import SummerClasses from './pages/SummerClasses.jsx'
import AfterSchool   from './pages/AfterSchool.jsx'

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
      <Route path="/robotics" element={<Robotics />} />
      <Route path="/vr-ar" element={<VrAr />} />
      <Route path="/game-development" element={<GameDevelopment />} />
      <Route path="/3d-modelling" element={<Modelling3D />} />
      <Route path="/2d-animation" element={<Animation2D />} />
      <Route path="/after-school" element={<AfterSchool />} />
      <Route path="/weekend-classes" element={<WeekendClasses />} />
      <Route path="/holiday-classes" element={<HolidayClasses />} />
      <Route path="/july-of-tech"    element={<JulyOfTech />} />
<Route path="/summer-classes"  element={<SummerClasses />} />
<Route path="/after-school"    element={<AfterSchool />} />
    </Routes>
  );
}

export default App;

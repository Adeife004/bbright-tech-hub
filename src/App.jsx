import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Programmes from "./pages/Programmes.jsx";
import Login from "./pages/Login.jsx";
import Apply from "./pages/Apply.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";
import Dashboard from "./pages/Dashboard.jsx";

// Service pages
import DigitalLiteracy from "./pages/DigitalLiteracy.jsx";
import UiUxDesign from "./pages/UiUxDesign.jsx";
import WebDevelopment from "./pages/WebDevelopment.jsx";
import DataAnalysis from "./pages/DataAnalysis.jsx";
import VibeCoding from "./pages/VibeCoding.jsx";
import Robotics from "./pages/Robotics.jsx";
import VrAr from "./pages/VRPage.jsx";
import GameDevelopment from "./pages/GameDevelopment.jsx";
import Modelling3D from "./pages/Modelling3D.jsx";
import Animation2D from "./pages/Animation2D.jsx";

// Programme pages
import AfterSchool from "./pages/AfterSchool.jsx";
import WeekendClasses from "./pages/WeekendClasses.jsx";
import HolidayClasses from "./pages/HolidayClasses.jsx";
import JulyOfTech from "./pages/JulyOfTech.jsx";
import SummerClasses from "./pages/SummerClasses.jsx";
import InSchoolPrograms from "./pages/InSchoolPrograms.jsx";
import TeacherTraining from "./pages/TeacherTraining.jsx";
import EducationalConsultation from "./pages/EducationalConsultation.jsx";

function App() {
  const { isAuth } = useAuth();

  return (
    <>
      <CustomCursor />

      <Routes>
        {/* ── Main pages ── */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />

        {/* ── Auth ── */}
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/dashboard" replace /> : <Login />}
        />

        {/* ── Protected dashboard ── */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ── Service / course pages ── */}
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

        {/* ── Special programme pages ── */}
        <Route path="/after-school" element={<AfterSchool />} />
        <Route path="/weekend-classes" element={<WeekendClasses />} />
        <Route path="/holiday-classes" element={<HolidayClasses />} />
        <Route path="/july-of-tech" element={<JulyOfTech />} />
        <Route path="/summer-classes" element={<SummerClasses />} />
        <Route path="/in-school-programs" element={<InSchoolPrograms />} />
        <Route path="/teacher-training" element={<TeacherTraining />} />
        <Route
          path="/educational-consultation"
          element={<EducationalConsultation />}
        />
      </Routes>
    </>
  );
}

export default App;

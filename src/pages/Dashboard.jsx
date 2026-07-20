import { useState } from "react";
import { useAuth } from "../context/useAuth.js";
import DashboardLayout from "../components/DashboardLayout.jsx";

// Staff panels
import StaffOverview from "../components/staff/StaffOverview.jsx";
import StaffReportForm from "../components/staff/StaffReportForm.jsx";
import StaffStudents from "../components/staff/StaffStudents.jsx";
import StaffAnnouncements from "../components/staff/StaffAnnouncements.jsx";

// Student panels
import StudentOverview from "../components/student/StudentOverview.jsx";
import StudentCourses from "../components/student/StudentCourses.jsx";
import StudentAssignments from "../components/student/StudentAssignments.jsx";
import StudentSchedule from "../components/student/StudentSchedule.jsx";
import StudentCertificates from "../components/student/StudentCertificates.jsx";

// ── Which component to render per section ID ──────────────────
const STAFF_PANELS = {
  overview: (props) => <StaffOverview {...props} />,
  report: () => <StaffReportForm />,
  students: () => <StaffStudents />,
  announcements: () => <StaffAnnouncements />,
};

const STUDENT_PANELS = {
  overview: () => <StudentOverview />,
  courses: () => <StudentCourses />,
  assignments: () => <StudentAssignments />,
  schedule: () => <StudentSchedule />,
  certificates: () => <StudentCertificates />,
};

function Dashboard() {
  const { user } = useAuth();
  const isStaff = user?.role === "staff";

  const [activeSection, setActiveSection] = useState("overview");

  const panels = isStaff ? STAFF_PANELS : STUDENT_PANELS;
  const Content = panels[activeSection] ?? panels["overview"];

  return (
    <DashboardLayout activeSection={activeSection} onNav={setActiveSection}>
      <Content onNav={setActiveSection} />
    </DashboardLayout>
  );
}

export default Dashboard;

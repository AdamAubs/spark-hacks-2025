import {Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import GradesGrid from "./pages/GradesGrid";
import MyCalendar from "./pages/MyCalendar";
import Contacts from "./pages/Contacts";
import Grades from "./pages/Grades";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:crn" element={<Courses />} />
        <Route path="/courses/:crn/contacts" element={<Contacts />} />
        <Route path="/courses/:crn/grades" element={<Grades />} />
        <Route path="/grades" element={<GradesGrid />} />
        <Route path="/calendar" element={<MyCalendar />} />
      </Routes>
    </MainLayout>
  );
}

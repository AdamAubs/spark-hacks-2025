import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Grades from "./pages/Grades";
import MyCalendar from "./components/MyCalendar";
import WagerGoals from "./pages/WagerGoals";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:crn" element={<Courses />} />
        <Route path="/courses/:crn/contacts" element={<Contacts />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/wager-goals" element={<WagerGoals />} />
      </Routes>
    </MainLayout>
  );
}

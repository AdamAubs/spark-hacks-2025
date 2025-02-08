import {Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import GradesGrid from "./pages/GradesGrid";
import Grades from "./pages/Grades";
import MyCalendar from "./pages/MyCalendar";
import Contacts from "./pages/Contacts";
import Assignments from "./pages/Assignments";
import { createContext, useState } from "react";

export const CourseContext = createContext(null);
export default function App() {

  const [crn, setCRN] = useState("66103");

  return (
    <CourseContext.Provider value={{crn, setCRN}} >
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:crn" element={<Courses />} />
          <Route path="/courses/:crn/contacts" element={<Contacts />} />
          <Route path="/courses/:crn/grades" element={<Grades />} />
          <Route path="/courses/:crn/assignments" element={<Assignments />} />
          <Route path="/grades" element={<GradesGrid />} />
          <Route path="/calendar" element={<MyCalendar />} />
        </Routes>
      </MainLayout>
    </CourseContext.Provider>
  );
}

import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Grades from "./pages/Grades";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:courseName" element={<Courses />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </MainLayout>
  );
}

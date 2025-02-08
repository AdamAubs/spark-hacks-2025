import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./UI/button";
import Dropdown from "./UI/dropdown";
import uiclogo from "../assets/uiclogo.png";
import courseData from "../data/courses.json";
import {
  LibraryBig,
  House,
  CalendarDays,
  BarChart3,
  CircleDollarSign,
  Settings,
} from "lucide-react"; // Import icons

export default function Navbar() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(courseData);
  }, []);

  return (
    <nav className="bg-white text-black p-4 flex items-center justify-between relative">
      {/* Logo & Title (Left) */}
      <div className="flex items-center space-x-2">
        <img src={uiclogo} alt="UIC Logo" className="h-10 w-auto" />
        <h1 className="text-xl font-bold">Whiteboard</h1>
      </div>

      {/* Centered Navigation Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
        <Button variant="ghost" asChild>
          <Link to="/" className="flex items-center space-x-2">
            <House size={18} />
            <span>Home</span>
          </Link>
        </Button>

        {/* Courses Dropdown (Using Dropdown Component) */}
        <Dropdown
          label={
            <span className="flex items-center space-x-2">
              <LibraryBig size={18} />
              <span>Courses</span>
            </span>
          }
        >
          {courses.length > 0 ? (
            courses.map((course) => (
              <Link
                key={course.title}
                to={`/courses/${course.courseNumber}`}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                {course.title}
              </Link>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No courses available</div>
          )}
        </Dropdown>

        <Button variant="ghost" asChild>
          <Link to="/grades" className="flex items-center space-x-2">
            <BarChart3 size={18} />
            <span>Grades</span>
          </Link>
        </Button>

        <Button variant="ghost" asChild>
          <Link to="/calendar" className="flex items-center space-x-2">
            <CalendarDays size={18} />
            <span>Calendar</span>
          </Link>
        </Button>

        <Button variant="ghost" asChild>
          <Link to="/wager-goals" className="flex items-center space-x-2">
            <CircleDollarSign size={18} />
            <span>Bet</span>
          </Link>
        </Button>
      </div>

      <Button variant="ghost" asChild>
        <Link to="/settings" className="flex items-center">
          <Settings size={18} />
        </Link>
      </Button>
    </nav>
  );
}

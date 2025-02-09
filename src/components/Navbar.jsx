import {Link} from "react-router-dom";
import {useState, useEffect, useContext} from "react";
import Button from "./UI/button";
import Dropdown from "./UI/dropdown";
import uiclogo from "../assets/uiclogo.png";
import courseData from "../data/courses.json";
import {LibraryBig, House, CalendarDays, BarChart3, Settings, LogOut} from "lucide-react"; // Import icons
import {CourseContext} from "../App";

export default function Navbar() {
  const [courses, setCourses] = useState([]);
  const {setCRN} = useContext(CourseContext);

  useEffect(() => {
    setCourses(courseData);
  }, []);

  return (
    <nav className="bg-white text-black p-4 flex items-center justify-between relative z-50 sticky top-0 shadow-md">
      <div className="flex items-center space-x-2">
        <img src={uiclogo} alt="UIC Logo" className="h-8 w-auto" />
        <h1 className="text-xl font-bold hidden lg:block">Liteboard</h1>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
        <Button variant="ghost" asChild>
          <Link to="/" className="flex items-center space-x-2">
            <House size={18} />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </Button>

        <Dropdown
          label={
            <span className="flex items-center space-x-2">
              <LibraryBig size={18} />
              <span className="hidden sm:inline">Courses</span>
            </span>
          }
        >
          {courses.length > 0 ? (
            courses.map(course => (
              <Link
                onClick={() => setCRN(course.CRN)}
                key={course.title}
                to={`/courses/${course.CRN}`}
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
            <span className="hidden sm:inline">Grades</span>
          </Link>
        </Button>

        <Button variant="ghost" asChild>
          <Link to="/calendar" className="flex items-center space-x-2">
            <CalendarDays size={18} />
            <span className="hidden sm:inline">Calendar</span>
          </Link>
        </Button>
      </div>

      <Dropdown
        label={
          <Button variant="ghost">
            <Settings size={18} />
          </Button>
        }
      >
        <button
          onClick={() => console.log("Logging out...")}
          className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-gray-200 transition"
        >
          <LogOut size={18} className="mr-2" />
          Logout
        </button>
      </Dropdown>
    </nav>
  );
}

import "../styles/Courses.css";
import SideNavbar from "../components/CourseNavbar";
import CoursePageHistory from "../components/CoursePageHistory";
import UpcomingAssignments from "../components/UpcomingAssignments";
import CsAnnoucments from "../components/CourseAnnouncments";
import courses from "../data/courses.json";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

export default function Courses() {
  const {crn} = useParams();
  const course = courses.find(course => course.CRN === crn);
  const [assignments, setAssignments] = useState(course?.assignments || []);

  useEffect(() => {
    setAssignments(course?.assignments || []);
  }, [crn, course]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideNavbar crn={crn} />

      {/* Main Content */}
      <div className="flex-1">
        <CoursePageHistory />
        <div className="grid grid-cols-6 gap-4 p-4">
          <div className="col-span-4">
            <UpcomingAssignments />
          </div>
          <div className="col-span-2">
            <CsAnnoucments />
          </div>
        </div>
      </div>
    </div>
  );
}

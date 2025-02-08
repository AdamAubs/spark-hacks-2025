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
  const [coursename, setName] = useState("CS 257");

  useEffect(() => {
    setAssignments(course?.assignments || []);
    setName(course?.title);
  }, [crn, course]);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <SideNavbar crn={crn} />

      {/* Main Content */}
      <div className="flex-1">
        <CoursePageHistory coursename={coursename} />
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 p-4">
          <div className="col-span-1 lg:col-span-4">
            <UpcomingAssignments assignments={assignments} />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <CsAnnoucments />
          </div>
        </div>
      </div>
    </div>
  );
}

import {useParams} from "react-router-dom";
import SideNavbar from "../components/CourseNavbar";
import Table from "../components/UI/table";
import courses from "../data/courses.json";

export default function Grades() {
  const {crn} = useParams();
  const course = courses.find(course => course.CRN === crn);

  // Extract completed assignments
  const completedAssignments = course?.completedAssignments || [];

  // Define table headers
  const headers = ["Assignment", "Type", "Due Date", "Completed Date", "Grade (%)"];

  // Convert data to table rows
  const data = completedAssignments.map(assignment => [
    assignment.title,
    assignment.type,
    assignment.dueDate,
    assignment.completedDate,
    `${assignment.gradePercentage}%`
  ]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideNavbar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {course ? `${course.title} Grades` : "Course Not Found"}
        </h1>
        <Table headers={headers} data={data} />
      </div>
    </div>
  );
}

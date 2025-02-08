import {useParams} from "react-router-dom";
import SideNavbar from "../components/CourseNavbar";
import GradesTable from "../components/GradesTable";
import courses from "../data/courses.json";

export default function Grades() {
  const {crn} = useParams();
  const course = courses.find(course => course.CRN === crn);

  // Helper function to determine background color based on overall grade
  function getOverallGradeBackgroundColor(grade) {
    const gradeNumber = parseFloat(grade.replace("%", ""));
    if (gradeNumber >= 90) return "#39e600"; // Green
    if (gradeNumber >= 80) return "#c6ff1a"; // Yellow-green
    if (gradeNumber >= 70) return "#ff9900"; // Orange
    return "#ff0000"; // Red
  }

  // Calculate overall grade
  const overallGrade = course ? `${calculateOverallGrade(course.completedAssignments)}%` : "N/A";

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideNavbar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-4">
          {/* Course Title */}
          <h1 className="text-3xl font-bold text-gray-900">{course ? `${course.title} Grades` : "Course Not Found"}</h1>

          {/* Grade Pill (Right Side) */}
          {course && (
            <div
              className="flex items-center justify-center px-6 py-2 rounded-full shadow-md text-black font-bold text-lg"
              style={{
                backgroundColor: getOverallGradeBackgroundColor(overallGrade),
                minWidth: "80px"
              }}
            >
              {overallGrade}
            </div>
          )}
        </div>

        {/* Grades Table */}
        <GradesTable completedAssignments={course?.completedAssignments || []} />
      </div>
    </div>
  );
}

// Helper function to calculate overall grade
function calculateOverallGrade(completedAssignments) {
  if (completedAssignments.length === 0) return "N/A";
  const totalGrade = completedAssignments.reduce((sum, assignment) => sum + assignment.gradePercentage, 0);
  return (totalGrade / completedAssignments.length).toFixed(1); // Round to 1 decimal place
}

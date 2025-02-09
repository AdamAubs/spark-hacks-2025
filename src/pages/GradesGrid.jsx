import {useState} from "react";
import {ChevronRight} from "lucide-react";
import coursesData from "../data/courses.json";
import AlertDialog from "../components/UI/alertDialog";
import GradesTable from "../components/GradesTable";

export default function GradesGrid() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGrades = course => {
    setSelectedCourse(course);
    setIsOpen(true);
  };

  // Extract only required data from courses.json
  const courses = coursesData.map(course => ({
    ...course,
    overallGrade: `${calculateOverallGrade(course.completedAssignments)}%`,
    recentGrades: course.completedAssignments.slice(0, 1) // Get the most recent graded assignment
  }));

  return (
    <div className="space-y-4 p-4">
      {courses.map((course, index) => (
        <div
          key={index}
          className="flex rounded-lg overflow-hidden shadow-md h-24 cursor-pointer transition hover:scale-[1.01]"
          onClick={() => handleOpenGrades(course)}
        >
          <div className="p-4 w-full flex justify-between items-center" style={{backgroundColor: course.color}}>
            {/* Chevron (Left) */}
            <ChevronRight className="text-white w-6 h-6" />

            {/* Course Info (Left) */}
            <div className="flex-1 pl-2">
              <h2 className="text-2xl font-bold text-white">{course.title}</h2>
              {course.recentGrades.length > 0 ? (
                <p className="text-sm text-gray-100">
                  Recent: {course.recentGrades[0].title} - {course.recentGrades[0].gradePercentage}%
                </p>
              ) : (
                <p className="text-sm text-gray-100">No recent grades</p>
              )}
            </div>

            {/* Grade Bubble (Right) */}
            <div className="bg-white flex items-center justify-center py-4 px-8 rounded-lg">
              <div
                className="flex items-center justify-center px-6 py-2 rounded-full shadow-md text-black font-bold text-lg"
                style={{
                  backgroundColor: getOverallGradeBackgroundColor(course.overallGrade),
                  minWidth: "80px"
                }}
              >
                {course.overallGrade}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Popup for Viewing Grades */}
      {selectedCourse && (
        <AlertDialog
          open={isOpen}
          setOpen={setIsOpen}
          title={`${selectedCourse.title} Grades`}
          description={<GradesTable completedAssignments={selectedCourse.completedAssignments} />}
          confirmLabel="Close"
          onConfirm={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

// Helper function to calculate overall grade
function calculateOverallGrade(completedAssignments) {
  if (completedAssignments.length === 0) return "N/A";
  const totalGrade = completedAssignments.reduce((sum, assignment) => sum + assignment.gradePercentage, 0);
  return (totalGrade / completedAssignments.length).toFixed(1); // Round to 1 decimal place
}

// Helper function to determine background color based on overall grade
function getOverallGradeBackgroundColor(grade) {
  const gradeNumber = parseFloat(grade.replace("%", ""));
  if (gradeNumber >= 90) return "#39e600"; // Green
  if (gradeNumber >= 80) return "#c6ff1a"; // Yellow-green
  if (gradeNumber >= 70) return "#ff9900"; // Orange
  return "#ff0000"; // Red
}
``;

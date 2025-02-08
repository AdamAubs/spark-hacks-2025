import courses from "../data/courses.json";
import "../styles/AssignmentsBoard.css";

export default function AssignmentsBoard() {
  // Flatten all assignments from courses into a single array
  const allAssignments = courses.flatMap((course) =>
    course.assignments.map((assignment) => ({
      ...assignment,
      courseTitle: course.title, // Include course title for reference
    }))
  );

  // Categorize assignments into three bins
  const dueAssignments = allAssignments.filter((a) => a.status === "due");
  const inProgressAssignments = allAssignments.filter(
    (a) => a.status === "in-progress"
  );
  const completedAssignments = allAssignments.filter(
    (a) => a.status === "completed"
  );
  return (
    <div className="assignments-board">
      <div className="assignments-column">
        <h2>Due</h2>
        {dueAssignments.length > 0 ? (
          dueAssignments.map((assignment, index) => (
            <div key={index} className="assignment-card due">
              <strong>{assignment.title}</strong> ({assignment.courseTitle})
              <p>Due: {assignment.dueDate}</p>
            </div>
          ))
        ) : (
          <p>No assignments due!</p>
        )}
      </div>

      <div className="assignments-column">
        <h2>In Progress</h2>
        {inProgressAssignments.length > 0 ? (
          inProgressAssignments.map((assignment, index) => (
            <div key={index} className="assignment-card in-progress">
              <strong>{assignment.title}</strong> ({assignment.courseTitle})
              <p>Due: {assignment.dueDate}</p>
            </div>
          ))
        ) : (
          <p>No assignments in progress!</p>
        )}
      </div>

      <div className="assignments-column">
        <h2>Completed</h2>
        {completedAssignments.length > 0 ? (
          completedAssignments.map((assignment, index) => (
            <div key={index} className="assignment-card completed">
              <strong>{assignment.title}</strong> ({assignment.courseTitle})
              <p>Completed</p>
            </div>
          ))
        ) : (
          <p>No completed assignments!</p>
        )}
      </div>
    </div>
  );
}

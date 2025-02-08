import {useState} from "react";
import Table from "../components/UI/table";

export default function GradesTable({completedAssignments}) {
  // Group assignments by type and calculate averages
  const groupedAssignments = completedAssignments.reduce((acc, assignment) => {
    if (!acc[assignment.type]) {
      acc[assignment.type] = {assignments: [], averageGrade: 0};
    }
    acc[assignment.type].assignments.push(assignment);
    return acc;
  }, {});

  // Calculate average for each group
  Object.keys(groupedAssignments).forEach(type => {
    const assignments = groupedAssignments[type].assignments;
    const totalGrade = assignments.reduce((sum, a) => sum + a.gradePercentage, 0);
    groupedAssignments[type].averageGrade = (totalGrade / assignments.length).toFixed(2);
  });

  return (
    <div className="space-y-4">
      {Object.entries(groupedAssignments).map(([type, {assignments, averageGrade}]) => (
        <CollapsibleGroup key={type} type={type} assignments={assignments} averageGrade={averageGrade} />
      ))}
    </div>
  );
}

// Collapsible Section for Each Assignment Type
function CollapsibleGroup({type, assignments, averageGrade}) {
  const [isOpen, setIsOpen] = useState(false);

  // Define table headers
  const headers = ["Assignment", "Due Date", "Completed Date", "Grade (%)"];

  // Convert assignments data to table rows
  const data = assignments.map(assignment => [
    assignment.title,
    assignment.dueDate,
    assignment.completedDate,
    `${assignment.gradePercentage}%`
  ]);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Header - Clickable to Toggle Collapse */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-200 p-3 text-left font-bold flex justify-between items-center"
      >
        <span>
          {type} (Avg: {averageGrade}%)
        </span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Collapsible Table */}
      {isOpen && <Table headers={headers} data={data} />}
    </div>
  );
}

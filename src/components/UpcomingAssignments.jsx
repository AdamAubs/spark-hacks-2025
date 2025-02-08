import {useState, useEffect} from "react";
import assignmentsData from "../data/assignments.json";
import { useParams } from "react-router-dom";
import courses from '../data/courses.json'

// export default function UpcomingAssignments() {
//   const [assignments, setAssignments] = useState([]);

//   useEffect(() => {
//     // Sort assignments by due date (earliest first)
//     const sortedAssignments = assignmentsData.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
//     setAssignments(sortedAssignments);
//   }, []);

//   return (
//     <div className="p-4 bg-white shadow-md rounded-md">
//       <h2 className="text-xl font-bold mb-4">Upcoming Assignments</h2>

//       {/* Assignment List (No Header) */}
//       <div className="space-y-2">
//         {assignments.length > 0 ? (
//           assignments.map(({name, courseNumber, dueDate}, index) => (
//             <div key={index} className="flex justify-between bg-gray-100 p-3 rounded-md shadow-sm">
//               <span className="text-black text-left">{new Date(dueDate).toLocaleDateString()}</span>
//               <span className="font-bold text-black text-left">{name}</span>
//               <span className="text-gray-500 text-left">{courseNumber}</span>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No upcoming assignments.</p>
//         )}
//       </div>
//     </div>
//   );
// }

export default function UpcomingAssignments({assignments}) {
  // const { crn } = useParams();
  // const [assignments, setAssignments] = useState([]);

  // useEffect(() => {
  //   // Sort assignments by due date (earliest first)
  //   //const sortedAssignments = assignmentsData.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  //   const course = courses.find((course) => course.CRN === crn);

  //   setAssignments(course.assignments);
  // }, [crn]);

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Upcoming Assignments</h2>

      {/* Assignment List (No Header) */}
      <div className="space-y-2">
        {assignments?.length > 0 ? (
          assignments.map((assignment, index) => (
            <div key={index} className="flex justify-between bg-gray-100 p-3 rounded-md shadow-sm">
              <span className="font-bold text-black text-left">{assignment.title}</span>
              <span className="text-black text-left">{new Date(assignment.dueDate).toLocaleDateString()}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No upcoming assignments.</p>
        )}
      </div>
    </div>
  );
}

import CoursesGrid from "../components/CoursesGrid";
import AssignmentsBoard from "../components/AssignmentsBoard";

export default function Home() {
  return (
    <div>
      <div className="my-courses">
        <CoursesGrid />
      </div>
      <div className="assignments">
        <AssignmentsBoard />
      </div>
    </div>
  );
}

import CoursesGrid from "../components/CoursesGrid";
import UpcomingAssignments from "../components/UpcomingAssignments";

export default function Home() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <CoursesGrid />
        </div>

        <div className="md:col-span-1">
          <UpcomingAssignments />
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import coursesData from "../data/courses.json"; // Rename import

const MyCalendar = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(coursesData); // Directly set static data
  }, []);

  // Convert courses JSON into FullCalendar events
  const events = courses.flatMap((course) =>
    course.assignments.map((assignment) => ({
      title: `${course.title}: ${assignment.title}`,
      start: assignment.dueDate,
      backgroundColor: course.color, // Uses course color
      extendedProps: {
        status: assignment.status,
      },
    }))
  );

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events} // Inject parsed events here
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />
    </div>
  );
};

export default MyCalendar;

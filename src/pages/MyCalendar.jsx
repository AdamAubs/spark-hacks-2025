import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import coursesData from "../data/courses.json";
import "../styles/MyCalendar.css";

const MyCalendar = () => {
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setCourses(coursesData);
  }, []);

  useEffect(() => {
    if (courses.length > 0) {
      const formattedEvents = courses.flatMap((course) =>
        course.assignments.map((assignment) => ({
          title: `${course.title}: ${assignment.title}`,
          start: convertToISODate(assignment.dueDate), // Fix date format
          backgroundColor: course.color,
          extendedProps: {
            status: assignment.status,
          },
        }))
      );
      setEvents(formattedEvents);
    }
  }, [courses]);

  // Helper function to convert "M/D/YY" → "YYYY-MM-DD"
  const convertToISODate = (dateString) => {
    const [month, day, year] = dateString.split("/");
    return `20${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
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

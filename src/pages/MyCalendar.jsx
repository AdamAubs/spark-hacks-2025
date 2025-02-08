import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
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
          start: convertToISODate(assignment.dueDate),
          backgroundColor: course.color,
          extendedProps: {
            status: assignment.status,
          },
        }))
      );
      setEvents(formattedEvents);
    }
  }, [courses]);

  const convertToISODate = (dateString) => {
    const [month, day, year] = dateString.split("/");
    return `20${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        firstDay={1}
        events={events}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "today",
        }}
      />
    </div>
  );
};

export default MyCalendar;

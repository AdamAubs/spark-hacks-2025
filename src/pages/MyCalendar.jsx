import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import coursesData from "../data/courses.json";
import "../styles/MyCalendar.css";

const MyCalendar = () => {
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasksForSelectedDate, setTasksForSelectedDate] = useState([]);

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
            description: assignment.description,
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

  // Date click handler
  const handleDateClick = (info) => {
    const clickedDate = info.dateStr; // This is the clicked date in 'YYYY-MM-DD' format
    console.log("Clicked Date: ", clickedDate); // Debugging line

    setSelectedDate(clickedDate);

    // Find all tasks for the clicked date
    const tasksForThisDate = events.filter(
      (event) => event.start === clickedDate
    );
    console.log("Filtered Tasks for this date: ", tasksForThisDate); // Debugging line

    setTasksForSelectedDate(tasksForThisDate);
  };

  return (
    <div className="calendar-container">
      {/* Display the clicked date's tasks */}
      {selectedDate && (
        <div className="tasks-list">
          <h3>Tasks for {selectedDate}</h3>
          <ul>
            {tasksForSelectedDate.length > 0 ? (
              tasksForSelectedDate.map((task, index) => (
                <li key={index}>
                  <p>
                    <strong>{task.title}</strong>
                  </p>
                  <p>Status: {task.extendedProps.status}</p>
                  <p>{task.extendedProps.description}</p>
                </li>
              ))
            ) : (
              <p>No tasks for this day.</p>
            )}
          </ul>
        </div>
      )}

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        dateClick={handleDateClick} // Add the date click handler here
      />
    </div>
  );
};

export default MyCalendar;

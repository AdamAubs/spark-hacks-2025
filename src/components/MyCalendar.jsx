import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/MyCalendar.css";

// Setup the localizer with moment
const localizer = momentLocalizer(moment);

// Sample events data
const myEventsList = [
  {
    title: "Meeting with Bob",
    start: new Date(2025, 1, 8, 10, 0), // February 8, 2025 at 10:00 AM
    end: new Date(2025, 1, 8, 12, 0), // February 8, 2025 at 12:00 PM
  },
  {
    title: "Lunch with Alice",
    start: new Date(2025, 1, 9, 14, 0), // February 9, 2025 at 2:00 PM
    end: new Date(2025, 1, 9, 15, 0), // February 9, 2025 at 3:00 PM
  },
];

const MyCalendar = () => (
  <div className="myCustomHeight">
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);

export default MyCalendar;

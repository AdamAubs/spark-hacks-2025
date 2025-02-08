import AnnouncementCard from "./AnnouncementCard";
import courseData from "../data/courses.json";

export default function CourseAnnouncements() {
  // Loop through courses and their announcements, with safety checks for missing data
  const allAnnouncements = courseData.flatMap(
    (course) =>
      course.content // Check if 'content' exists
        ? course.content.map((announcement) => ({
            title: announcement.title,
            date: announcement.date,
            content: announcement.paragraph, // Updated key for content
          }))
        : [] // Return an empty array if no 'content' found
  );

  return (
    <div className="px-4 py-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
      {/* Announcement Label */}
      <p className="text-2xl text-center text-gray-800 font-bold mb-6">
        Announcements
      </p>

      {/* Map over all announcements and pass each one to the AnnouncementCard */}
      {allAnnouncements.map((announcement, index) => (
        <AnnouncementCard key={index} announcement={announcement} />
      ))}
    </div>
  );
}

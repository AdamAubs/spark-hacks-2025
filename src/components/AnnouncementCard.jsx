export default function AnnouncementCard({ announcement }) {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-sm mb-4 overflow-hidden">
      <p className="font-semibold text-lg text-gray-900 truncate">
        {announcement.title}
      </p>
      <p className="text-sm text-gray-600 mb-2 truncate">{announcement.date}</p>
      <div className="text-sm text-gray-700 max-h-40 overflow-y-auto overflow-x-hidden whitespace-normal">
        {/* Content area becomes scrollable vertically and prevents horizontal overflow */}
        {announcement.content}
      </div>
    </div>
  );
}

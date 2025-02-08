export default function CsAnnouncements() {
  return (
    <div className="px-2 bg-white shadow-md rounded-md">
      {/* Announcement Label */}
      <p className="text-center rounded-md px-4 py-2 font-bold">Announcements</p>

      {/* Scrollable Announcement List */}
      <ul className=" list-none rounded-md p-4 w-full h-[500px] overflow-y-scroll">
        {[...Array(8)].map((_, index) => (
          <li
            key={index}
            className={`flex items-center p-3 w-full h-24 overflow-y-auto rounded-md ${
              index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
            }`}
          >
            <p className="text-sm leading-5">
              The European languages are members of the same family. Their separate existence is a myth. For science,
              music, sport, etc., Europe uses the same vocabulary. The languages only differ in their grammar, their
              pronunciation, and their most common words.
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

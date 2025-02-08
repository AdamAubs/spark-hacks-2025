export default function CoursePageHistory({ coursename }) {
  return (
    <div className="w-full border-b-2 border-black p-3 bg-gray-100 shadow-sm">
      <div className="flex items-center gap-3">
        <h1 className="underline cursor-pointer text-xl font-semibold  hover:text-blue-800 transition">
          {coursename || "CS 257"}
        </h1>
        <p className="text-gray-500 text-lg">&gt;</p>
      </div>
    </div>
  );
}

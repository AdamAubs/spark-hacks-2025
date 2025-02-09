export default function CoursePageHistory({coursename, color}) {
  return (
    <div className="w-full border-b-2 p-3 shadow-md" style={{backgroundColor: color}}>
      <div className="flex items-center gap-3">
        <h1 className="text-white cursor-pointer text-xl font-semibold hover:text-blue-800 transition">
          {coursename || "CS 257"}
        </h1>
      </div>
    </div>
  );
}

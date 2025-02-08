import courses from "../data/courses.json";
import CourseCard from "./CourseCard";

const CoursesGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {courses.map((course, index, CRN) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default CoursesGrid;

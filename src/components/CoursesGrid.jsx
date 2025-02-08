import courses from "../data/courses.json";
import CourseCard from "./CourseCard";
import "../styles/CoursesGrid.css";

const CoursesGrid = () => {
  return (
    <div className="courses-grid">
      {courses.map((course, index) => (
        <CourseCard key={index} title={course.title} image={course.image} />
      ))}
    </div>
  );
};

export default CoursesGrid;

import React from "react";
import {Link} from "react-router-dom";

const CourseCard = ({course}) => {
  return (
    <Link to={`/courses/${course.CRN}`} className="block">
      <div className="shadow-lg rounded-2xl overflow-hidden text-white transition hover:scale-[1.02] flex flex-col h-full">
        {/* Course Header */}
        <div className="p-4 pt-10 flex-grow flex flex-col justify-between" style={{backgroundColor: course.color}}>
          <h2 className="text-xl font-bold">{course.title}</h2>
          <p className="text-sm">{course.instructor}</p>
        </div>

        {/* Course Footer */}
        <div className="bg-white p-4 flex justify-between items-center rounded-b-2xl text-gray-700">
          <p className="text-sm font-medium">{course.CRN}</p>
          <p className="text-sm">{course.semester}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

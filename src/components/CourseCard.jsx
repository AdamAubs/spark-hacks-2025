import React from "react";

const CourseCard = ({course}) => {
  return (
    <div className={`p-4 rounded-2xl text-white shadow-lg bg-${course.color}`}>
      <div>
        <h2 className="text-xl font-bold">{course.title}</h2>
        <p className="text-sm">{course.instructor}</p>
      </div>
      <div>
        <p className="text-sm">{course.CRN}</p>
        <p className="text-sm">📅 {course.semester}</p>
      </div>
    </div>
  );
};

export default CourseCard;

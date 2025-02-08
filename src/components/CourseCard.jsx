import React from "react";

const CourseCard = ({course}) => {
  return (
    <div className="shadow-lg rounded-2xl overflow-hidden text-white transition hover:scale-[1.02]">
      <div className="" style={{backgroundColor: course.color}}>
        <div className="p-4">
          <h2 className="text-xl font-bold">{course.title}</h2>
          <p className="text-sm">{course.instructor}</p>
        </div>
      </div>

      <div className="bg-white p-3 flex justify-between items-center rounded-b-2xl text-gray-700">
        <p className="text-sm font-medium">{course.CRN}</p>
        <p className="text-sm">{course.semester}</p>
      </div>
    </div>
  );
};

export default CourseCard;

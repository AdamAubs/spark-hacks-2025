import { useState, useEffect } from "react";
import assignmentsData from "../data/assignments.json";
import { useParams } from "react-router-dom";
import courses from "../data/courses.json";

export default function UpcomingAssignments({ assignments }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Upcoming Assignments</h2>

      {/* Assignment List (No Header) */}
      <div className="space-y-2">
        {assignments?.length > 0 ? (
          assignments.map((assignment, index) => (
            <div
              key={index}
              className="flex justify-between bg-gray-100 p-3 rounded-md shadow-sm"
            >
              <span className="font-bold text-black text-left">
                {assignment.title}
              </span>
              <span className="text-black text-left">
                {new Date(assignment.dueDate).toLocaleDateString()}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No upcoming assignments.</p>
        )}
      </div>
    </div>
  );
}

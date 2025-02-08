import SideNavbar from '../components/CourseNavbar'

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Assignments() {
    const categories = {
        Homeworks: ["Math Assignment", "Science Report", "History Essay", "Coding Exercise"],
        Projects: ["Group Project", "Research Paper", "Presentation", "Final Project"],
        Assessments: ["Quiz 1", "Midterm", "Final Exam", "Extra Credit"]
    };

    const [openDropdown, setOpenDropdown] = useState({});

    const toggleDropdown = (category) => {
        setOpenDropdown((prev) => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    return (
        <div className="flex h-screen">
            <SideNavbar />
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-semibold mb-4">Assignments</h1>
                <ul className="space-y-3">
                    {Object.entries(categories).map(([category, items]) => (
                        <li key={category} className="bg-white rounded-lg shadow">
                            <button 
                                onClick={() => toggleDropdown(category)}
                                className="w-full flex items-center gap-2 p-4 text-lg font-medium hover:bg-gray-200 transition rounded-lg"
                            >
                                {openDropdown[category] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                <span>{category}</span>
                            </button>
                            {openDropdown[category] && (
                                <ul className="pl-10 pr-4 pb-3 space-y-2">
                                    {items.map((item) => (
                                        <li key={item} className="p-2 text-gray-700 hover:bg-gray-200 rounded-md transition">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}




function AssignmentCard({assignment}) {
    return (
        <div>
            <p>Assignment 1</p>
        </div> 
    );
}
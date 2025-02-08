import '../styles/Courses.css'
import CourseNav from '../components/CourseNav'
import Upcoming from '../components/Upcoming'
import CsAnnoucments from '../components/CourseAnnouncments'
import courses from '../data/courses.json'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Courses() {
  const { crn } = useParams(); // Get CRN from URL
  const course = courses.find((course) => course.CRN === crn);
  const [assignments, setAssignments] = useState(course?.assignments || []);

  // Update assignments when CRN changes
  useEffect(() => {
    setAssignments(course?.assignments || []);
  }, [crn, course]);

  console.log(assignments);

  
  return (
    <>
      <div id='courses-root'>
        <div id='courses-main'>
          <CourseNav />
          <div id='main-content'>
            <Upcoming assignments={assignments} />
            <CsAnnoucments />
          </div>
        </div>
      </div>
    </>
  );
}
  
import './CourseNav.css'
import { useParams } from 'react-router-dom'

export default function CourseNav() {
    let { courseName } = useParams();
    if (courseName == "undefined") { courseName = undefined; }
    
    return (
        <>
            <div id='coursenav-root'>
                <div id='link-history'>
                    <p className='page-link'>{courseName || "CS 257"}</p> <p>&gt;</p>
                    <p className='page-link'>Assignments</p> <p>&gt;</p>
                    <p className='page-link'>Project 1: SparkHacks</p> <p>&gt;</p>
                    <p className='page-link'>Requirements</p> <p>&gt;</p>
                </div>
                <ul id='course-nav'>
                    <li className='nav-item'><p>Assignments</p></li>
                    <li className='nav-item'><p>Discussions</p></li>
                    <li className='nav-item'><p>Course Grade</p></li>
                </ul>
            </div>
        </>
    );
}
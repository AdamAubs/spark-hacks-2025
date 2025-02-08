import './CourseNav.css'

export default function CourseNav() {
    
    return (
        <>
            <div id='coursenav-root'>
                <div id='link-history'>
                    <p className='page-link'>CS 257</p> <p>&gt;</p>
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
import './Courses.css'
import CourseNav from '../components/CourseNav'
import Upcoming from '../components/Upcoming'
import CsAnnoucments from '../components/CourseAnnouncments'

export default function Courses() {
  return (
    <>
      <div id='courses-root'>
        {/* <div id='courses-side'>
          
        </div> */}
        <div id='courses-main'>
          <CourseNav />
          <div id='main-content'>
            <Upcoming />
            <CsAnnoucments />
          </div>
        </div>
      </div>
    </>
  );
}

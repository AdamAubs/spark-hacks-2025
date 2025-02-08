import "./CourseNav.css";
import {useParams} from "react-router-dom";

export default function CourseNav() {
  let {crn} = useParams();

  return (
    <>
      <div id="coursenav-root">
        <div id="link-history">
          <p className="page-link">{crn || "12345"}</p> <p>&gt;</p>
          <p className="page-link">Assignments</p> <p>&gt;</p>
          <p className="page-link">Project 1: SparkHacks</p> <p>&gt;</p>
          <p className="page-link">Requirements</p> <p>&gt;</p>
        </div>
      </div>
    </>
  );
}

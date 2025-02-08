import {useParams} from "react-router-dom";

export default function CourseNav() {
  let {crn} = useParams();

  return (
    <div className="w-full border-b-2 border-black p-2">
      <div className="flex flex-row gap-2">
        <p className="underline cursor-pointer">{crn || "12345"}</p>
        <p>&gt;</p>
        <p className="underline cursor-pointer">Assignments</p>
        <p>&gt;</p>
        <p className="underline cursor-pointer">Project 1: SparkHacks</p>
        <p>&gt;</p>
        <p className="underline cursor-pointer">Requirements</p>
        <p>&gt;</p>
      </div>
    </div>
  );
}

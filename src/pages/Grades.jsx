

import './Grades.css'
export default function Grades() {
   const courses = [
       {
           name: "Math 101",
           overallGrade: "88%",
           recentGrades: [
               { title: "Lecture 01", grade: "1/1" },
               { title: "Lecture 02", grade: "1/1" },
               { title: "Assignment 01", grade: "44/50" }
           ]
       },
       {
           name: "History 102",
           overallGrade: "96%",
           recentGrades: [
               { title: "Lecture 01", grade: "1/1" },
               { title: "Lecture 02", grade: "1/1" },
               { title: "Assignment 01", grade: "48/50" }
           ]
       },
       {
           name: "English 101",
           overallGrade: "75%",
           recentGrades: [
               { title: "Lecture 01", grade: "1/1" },
               { title: "Lecture 02", grade: "1/1" },
               { title: "Assignment 01", grade: "39/50" }
           ]
       },
       {
           name: "Physics 101",
           overallGrade: "68%",
           recentGrades: [
               { title: "Lecture 01", grade: "1/1" },
               { title: "Lecture 02", grade: "1/1" },
               { title: "Assignment 01", grade: "30/50" }
           ]
       }
   ];


   // Helper function to determine background color based on overall grade
   const getOverallGradeBackgroundColor = (grade) => {
       const gradeNumber = parseFloat(grade.replace('%', ''));
       // return gradeNumber >= 90 ? '#39e600' : '#c6ff1a'; // Green for >= 90%, Orange for < 90%
       if(gradeNumber >= 90){
           return '#39e600';
       }
       else if(gradeNumber >=80){
           return '#c6ff1a';
       }
       else if(gradeNumber >= 70){
           return '#ff9900';
       } else if(gradeNumber < 70){
           return '#ff0000';
       }
   };


   return (
       <div className="grades-container">
           {courses.map((course, index) => (
               <div key={index} className="grade-course-card">
                   {/* Course Header */}
                   <div className="course-header">
                       <h2 className="course-title">{course.name}</h2>
                       <span className="course-grade" style={{ backgroundColor: getOverallGradeBackgroundColor(course.overallGrade) }}>
                           <span className="real-grade">{course.overallGrade}</span>
                       </span>
                   </div>


                   {/* Recent Grades Section */}
                   <h3 className="grades-title">Recent Grades</h3>
                   <ul className="grades-list">
                       {course.recentGrades.map((item, i) => (
                           <li key={i} className="grade-item">
                               <span className="grade-title">{item.title}</span>
                               <span className="grade-value">
                                   <span className="real-grade">{item.grade}</span>
                               </span>
                           </li>
                       ))}
                   </ul>
               </div>
           ))}
       </div>
   );
}

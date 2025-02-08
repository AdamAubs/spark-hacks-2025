const CourseCard = ({ title, image }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <h3>{title}</h3>
    </div>
  );
};

export default CourseCard;

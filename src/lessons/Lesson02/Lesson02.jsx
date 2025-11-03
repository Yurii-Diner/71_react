import Button from "../../components/Button/Button";
// import LessonCard from "../../components/LessonCard/LessonCard";
import Lesson from "../../components/LessonCard/LessonCard";
import "./styles.css";

function Lesson02() {
  return (
    <div className="lesson02-wrapper">
      <div className="button-container">
        <Button />
        <Button />
        <Button />
      </div>
      {/* <LessonCard /> */}
      <Lesson />
    </div>
  );
}

export default Lesson02;


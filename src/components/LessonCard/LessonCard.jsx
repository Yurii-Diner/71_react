import Button from "../Button/Button";
import "./styles.css";
// Именованный импорт
import { lessonData } from "./data";

function LessonCard() {
  const getFullName = () => {
    return `${lessonData.nameTeacher} ${lessonData.surnameTeacher}`;
  };

  return (
    <div className="lesson-card-wrapper">
      <h3>Lesson {lessonData.lesson_number}</h3>
      <p>{lessonData.topic}</p>
      <p>{getFullName()}</p>
      <img src={lessonData.imgSrc} />
      <Button />
    </div>
  );
}

// Экспорт по умолчанию
// - его можно сделать только один раз, то есть только для одной функции, компонента, объекта...
// - при импорте мы можем менять название элемента, который мы импортируем (в файле с импортом)
export default LessonCard;

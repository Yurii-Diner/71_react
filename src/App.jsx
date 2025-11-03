// Импортируем компонент Button для его дальнейшего использования
// import Button from "./components/Button/Button";
// Импорты лекций
// import Lesson02 from "./lessons/Lesson02/Lesson02";
import Lesson03 from "./lessons/Lesson03/Lesson03";
// Импорты домашних работ
// import Homework02 from "./homeworks/Homework02/Homework02";

function App() {
  return (
    <>
      {/* Вызываем компонент Button для того, чтобы он вернул 
      JSX и наша кнопка отобразилась на странице*/}
      {/* <div className="button-container">
        <Button />
      </div> */}
      {/* Лекция 2 */}
      {/* <Lesson02 /> */}
      {/* <Homework02 /> */}
      {/* Лекция 3 */}
      <Lesson03 />
    </>
  );
}
export default App;
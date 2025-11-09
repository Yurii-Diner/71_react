// Импортируем хук useState из React для работы с состоянием компонента
import { useState } from "react";
// Импортируем css-стили для данного компонента
import "./styles.css";
// Импортируем компонент Button из соответствующей директории
import Button from "../Button/Button";

// Объявляем функциональный компонент Feedback
function Feedback() {

  // Объявляем состояние для счетчика лайков с начальным значением 0
  // Здесь деструктурирующее присваивание 
  // likes - стейт который хранит лайки
  // setLikes функция которая будет возвращена когда будет вызван useState
  // Вызываем хук useState(0) для создания локального хранилища и передаем туда начальное значение 0
  const [likes, setLikes] = useState(0);

  // Объявляем состояние для счетчика дизлайков с начальным значением 0
  const [dislikes, setDislikes] = useState(0);

  // Функция для увеличения счетчика лайков
  const addLike = () => {
    // Используем функциональное обновление состояния для надежности
    setLikes((prevState) => prevState + 1);
  };

  // Функция для увеличения счетчика дизлайков
  const addDislike = () => {
    // Используем функциональное обновление состояния для надежности
    setDislikes((prevState) => prevState + 1);
  };

  // Функция для сброса лайков
  const resetLikes = () => {
    setLikes(0);    // Сбрасываем лайки в 0

  };

  // Функция для сброса Дизлайков
  const resetDislikes = () => {
    setDislikes(0); // Сбрасываем дизлайки в 0
  };

  // Функция для сброса обоих счетчиков к нулю
  const resetResults = () => {
    setLikes(0);    // Сбрасываем лайки в 0
    setDislikes(0); // Сбрасываем дизлайки в 0
  };

  // Возвращаем JSX-разметку компонента
  return (
    // Основной контейнер с классом из CSS-стилей
    <div className="feedback-container"> 

      {/* Контейнер для результатов лайков и дизлайков */}
      <div className="feedback-results-container">

        {/* Контейнер для блока с лайками */}
        <div className="like-dislike-container">
          {/* Отображаем текущее количество лайков */}
          <div className="result">{likes}</div>
          {/* Кнопка для добавления лайка с обработчиком onClick */}
          <Button name="Лайк" onClick={addLike} />
        </div>
        
        {/* Контейнер для блока с дизлайками */}
        <div className="like-dislike-container">
          {/* Отображаем текущее количество дизлайков */}
          <div className="result">{dislikes}</div>
          {/* Кнопка для добавления дизлайка с обработчиком onClick */}
          <Button name="Дизлайк" onClick={addDislike} />
        </div>

      </div>

      {/* Контейнер для обнуления результатов лайков и дизлайков */}
      <div className="feedback-results-container">

        {/* Контейнер для блока с лайками */}
        <div className="like-dislike-container">
          {/* Кнопка для добавления лайка с обработчиком onClick */}
          <Button name="Обнулить лайки" onClick={resetLikes} />
        </div>
        
        {/* Контейнер для блока с дизлайками */}
        <div className="like-dislike-container">
          {/* Кнопка для добавления дизлайка с обработчиком onClick */}
          <Button name="Обнулить дизлайки" onClick={resetDislikes} />
        </div>

      </div>

      {/* Кнопка для сброса результатов, расположенная отдельно */}
      <Button name="Обнулить все" onClick={resetResults} />

    </div>
  );
}

// Экспортируем компонент для использования в других файлах
export default Feedback;
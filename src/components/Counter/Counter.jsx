// Шаг1 - импорт хука
import {useState} from "react";

import Button from "../Button/Button";
import "./styles.css";
function Counter() {

// Шаг2 - вызов хука
// В вызов хука необходимо передать значение по умолчанию(любой тип данных)
const [counter, setCounter] = useState(0);
//console.log(state);

// Шаг 3 - создаем функцииб которые будем передавать кнопкамБ внутри этих функций
// мы должны вызывать функцию setCounter, в которой пропишем логику изменения состояния

const onMinusClick = () => {
    // Мы можем использовать функцию setCounter двумя способами
    // 1 - просто передавая новое значение если новое значение не зависит от предыдущего

    // 2 - передавать функцию callbask, внутри которой мы можем получить предыдущее состояние и
    // изменить его
    // 1- setCounter(counter)
    setCounter((prevState) => prevState -1);
}

const onPlusClick = () => {
    setCounter((prevState) => prevState +1);
}

  return (
    <div className="counter-wrapper">
      <div className="button-wrapper">
        <Button name="-" onClick={()=> onMinusClick}/>
      </div>
      <div className="result-container">{state[0]}</div>
      <div className="button-wrapper">
        <Button name="+" onClick={()=> onPlusClick}/>
      </div>
    </div>
  );
}
export default Counter;
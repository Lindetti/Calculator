import { useState, useEffect } from 'react'
import './App.css'

function App() {
//Result State
const [result, setResult] = useState("");
//Time State
const [time, setTime] = useState("");

//All numbers function
const handleNumbers = (value) => {
  setResult(result + value);
}

//All operators function
const handleOperators = (operator) => {
  setResult(result + operator);
}

//Equal function
const equalHandler = () => {
  const sum = eval(result);
  setResult(sum.toString());
}

//Reset result State
const reset = () => {
  setResult("");
}

//Show time on mount
const setTimeWithoutSeconds = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  setTime(`${hours}:${minutes}`);
}

useEffect(() => {
  setTimeWithoutSeconds(); // set initial time without seconds
  const intervalId = setInterval(setTimeWithoutSeconds, 60000); // update time every minute without seconds

  return () => clearInterval(intervalId);
}, []);


  return (
    <div className="wrapper">
      <h2>Coded by Alexander Lind</h2>
      <div className="phoneScale"> 
      <div className="upperDiv">
     <div className="time">
     <p>{time}</p>
     </div>
     <div className="battery">
      <div className="whiteDiv"></div>
     </div>
      </div>
      <div className="result">
        <div className="resultMargin">
      <p>{result}</p>
      </div>
    </div>
   <div className="calculator-container">

    <div className="buttonDiv">

      <button className="greyBtn" onClick={reset}>C</button>
      <button className="greyBtn "onClick={() => handleOperators("%")}>+/-</button>
      <button className="greyBtn" onClick={() => handleOperators("%")}>%</button>
      <button className="orangeBtn" onClick={() => handleOperators("/")}>/</button>

      <button onClick={() => handleNumbers("7")}>7</button>
      <button onClick={() => handleNumbers("8")}>8</button>
      <button onClick={() => handleNumbers("9")}>9</button>
      <button className="orangeBtn" onClick={() => handleOperators("*")}>X</button>

      <button onClick={() => handleNumbers("4")}>4</button>
      <button onClick={() => handleNumbers("5")}>5</button>
      <button onClick={() => handleNumbers("6")}>6</button>
      <button className="orangeBtn" onClick={() => handleOperators("-")}>-</button>

      <button onClick={() => handleNumbers("1")}>1</button>
      <button onClick={() => handleNumbers("2")}>2</button>
      <button onClick={() => handleNumbers("3")}>3</button>
      <button className="orangeBtn" onClick={() => handleOperators("+")}>+</button>

      <button className="biggerBtn" onClick={() => handleNumbers("0")}>0</button>
      <button onClick={() => handleNumbers(".")}>,</button>
      <button className="orangeBtn" onClick={equalHandler}>=</button>

      </div>

      <div className="borderDiv">
        <div className="border"></div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default App;

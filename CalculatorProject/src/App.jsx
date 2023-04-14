import { useState } from 'react'
import './App.css'

function App() {
const [result, setResult] = useState("");


const handleNumbers = (value) => {
  setResult(result + value);
}

const handleOperators = (operator) => {
  setResult(result + operator);
}

const equalHandler = () => {
  const sum = eval(result);
  setResult(sum.toString());
}

const reset = () => {
  setResult("");
}

  return (
    <div className="wrapper">
      <div className="phone"> 
      <div className="result">
        <div className="testDiv">
      <p>{result}</p>
      </div>
    </div>
   <div className="calculator-container">
    <div className="buttonDiv">

      <button className="greyBtn" onClick={reset}>C</button>
      <button className="greyBtn "onClick={() => handleOperators("%")}>%</button>
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

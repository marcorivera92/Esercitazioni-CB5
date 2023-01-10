import "./App.css";
import { useState } from "react";

function NumberGenerator(props) {
  const [number, setNumber] = useState([]);
  const randomNumber = () => Math.floor(Math.random() * 91);

  const generatorClick = () => {
    const newNumber = randomNumber();
    setNumber((number) => number.concat(newNumber));
    console.log(number);
  };

  return (
    <div>
      <h1> Number Generator </h1>
      <p> Result: `{number[number.length - 1]}`</p>
      <p className="old-numbers">Drawn numbers: {number + ""}</p>
      <ButtonGenerator
        clickHandler={generatorClick}
        isDrawn={Number.isInteger(number)}
        disabled={number.length > 5}
      />
    </div>
  );
}

function ButtonGenerator(props) {
  const { disabled, clickHandler, number, ...attributes } = props;

  return (
    <button
      onClick={clickHandler}
      {...attributes}
      className={`btn ${disabled ? "btn-disabled" : ""}`}
    >
      {disabled ? "You got 6 numbers!" : "Click to pick a number"}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <NumberGenerator />
    </div>
  );
}

export default App;

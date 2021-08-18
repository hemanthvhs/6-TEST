import React, { useState } from "react";
import Dice from "../Dice/Dice";
import "./RollDice.css";

function RollDice(props) {
  const [dice1, setDice1] = useState("one");
  const [dice2, setDice2] = useState("six");
  const [rolling, setRolling] = useState(false);

  const defaultProps = ["one", "two", "three", "four", "five", "six"];

  const generateRandomNum = () => {
    return Math.floor(Math.random() * defaultProps.length);
  };
  const generateDiceNum = () => {
    setDice1(defaultProps[generateRandomNum()]);
    setDice2(defaultProps[generateRandomNum()]);
    setRolling(true);

    // After 1 Min set the rolling to false

    setTimeout(function () {
      setRolling(false);
    }, 100);
  };

  return (
    <div className="RollDice">
      <Dice value={dice1} />
      <Dice value={dice2} />
      <button className="button" disabled={rolling} onClick={generateDiceNum}>
        {rolling ? "Rolling" : "Roll Dice"}
      </button>
    </div>
  );
}

export default RollDice;

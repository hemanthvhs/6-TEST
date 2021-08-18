import React from "react";
import "./Dice.css";

function Dice({ value }) {
  return (
    <div className="Dice">
      <i className={`fas fa-dice-${value}`}></i>;
    </div>
  );
}

export default Dice;

import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/card.scss";

export function Card({ card, front, back, handleChoice, flipped , disabled}) {
  const handleClick = () => {
    handleChoice(card);
  };

  const doNothing = () => {
    console.log('Nada')
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped": ""}>
        <img className="front" src={front} alt="card front" />
        <img
          className="back"
          src={back}
          alt="card back"
          onClick={!disabled? handleClick : doNothing}
        />
      </div>
    </div>
  );
}
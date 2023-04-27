import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import { Button } from "./components/Button";
import { Card } from "./components/Card";

import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import img7 from "./img/7.png";
import img8 from "./img/8.png";
import img9 from "./img/9.png";
import img10 from "./img/10.png";
import img11 from "./img/11.png";

const cardImg = [
  { src: img1, matched: false },
  { src: img2, matched: false },
  { src: img3, matched: false },
  { src: img4, matched: false },
  { src: img5, matched: false },
  { src: img6, matched: false },
  { src: img7, matched: false },
  { src: img8, matched: false },
  { src: img9, matched: false },
  { src: img10, matched: false },
];

export function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [finished, setFinished] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleCard = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
    if(cards.every((card) => card.matched === true)){
        setFinished(true);
        console.log('Finished');
    }else{
        setFinished(false);
    }
  }, [choiceOne, choiceTwo, cards]);

  return (
    <div>
      <div className="gameHeader">
        <h1>Juego de Memoria</h1>
        <Button title="Iniciar partida" onClick={shuffleCards}></Button>
        <h3 className="turns">Turnos: {turns}</h3>
        <h3 className={finished ? "finished": "fade"}>Felicitaciones, ha completado la memoria! 🤙</h3>
      </div>
      <div className="table">
        {cards.map((card) => (
          <Card
            disabled={disabled}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            key={card.id}
            card={card}
            front={card.src}
            back={img11}
            handleChoice={handleCard}
          ></Card>
        ))}
      </div>
    </div>
  );
}


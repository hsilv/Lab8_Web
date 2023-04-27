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

  const shuffleCards = () => {
    const shuffledCards = [...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div>
      <div className="gameHeader">
        <h1>Juego de Memoria</h1>
        <Button title="Iniciar partida" onClick={shuffleCards}></Button>
      </div>
    </div>
  );
}

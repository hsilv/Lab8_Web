import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import { Button } from "./components/Button";

export function App() {
  return (
    <div>
      <div className="gameHeader">
        <h1>Juego de Memoria</h1>
        <Button title="Iniciar partida"></Button>
      </div>
    </div>
  );
}

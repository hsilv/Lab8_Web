import React from "react";
import ReactDOM from "react-dom/client";
import '../styles/button.scss'

export function Button({title, onClick}){
    return <button className="Button" onClick={onClick}>{title}</button>
}
import React from "react";
import img from "./assets/Troll.png"
import "./header.css"
export default function Header(){
    return(
        <div className="header--container">
            <img src={img} alt="trollface" className="header--image"/>
            <h1 className="header--text">Meme Generator</h1>
        </div>
    )
}
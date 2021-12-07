import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Games.module.css"

const Games = () => {
    return <div className={s.container}>
    <NavLink to="/game1" >
        <div className={s.game1}></div>
    </NavLink>
    <a href="C:/Users/slava/Desktop/game/index.html">
        <div className={s.game1}></div>
    </a>
    </div>
}

export default Games
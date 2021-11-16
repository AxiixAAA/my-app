import React from "react";
import s from "./Komponenty.module.css";
import {NavLink} from "react-router-dom";


let Komponenta2 = (props) => {
  return (
    <div>
    <NavLink to="/Komponenta2">
    <div className={s.containerDialogs} >
    <div className={s.messageIcon}></div>  
    Олег Чипчик
    </div></NavLink>
    </div>
  );
};

export default Komponenta2;
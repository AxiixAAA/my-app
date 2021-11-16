import React from "react";
import s from "./Komponenty.module.css";
import {NavLink} from "react-router-dom";


let Komponenta1 = (props) => {

  return (
    <div>
    <NavLink to="/Komponenta1">
      <div className={s.containerDialogs}>
        <div className={s.messageIcon}></div>
        Вячеслав Тарасов
      </div>
    </NavLink>
    </div>
  );
};

export default Komponenta1;
import React from "react";
import s from "./DialogItem.module.css";
import avatar from "../../../assets/images/avatar.png";
import { NavLink, Route } from "react-router-dom";
// import Message from "../Message.jsx/Message";
// import {NavLink} from "react-router-dom";

let DialogItem = (props) => {
     
    return (
        <div className={s.DialogItem}>
            <NavLink to="/message">
            <div className={s.containerDialogs}>
                <div>
                    <img 
                    src={props.icon  != null ? props.icon  : avatar}
                    alt="картинка"
                    className={s.messageIcon}
                    />
                </div>
                <div className={s.messageFullName}>{props.name}</div>
            </div>
            </NavLink>
        </div>
    );
  }

export default DialogItem;

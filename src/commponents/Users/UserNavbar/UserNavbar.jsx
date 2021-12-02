import React from "react";
import { NavLink } from "react-router-dom";
import s from "./UserNavbar.module.css";

const UserNavbar = () =>{
    return  <>
         <div className={s.nav}>
         <NavLink to="/friends">
                <div className={s.item}>
                    Мои друзья
                </div>
        </NavLink>
        <NavLink to="/users">
                <div className={s.item}>
                    Поиск друзей
                </div>
        </NavLink>
        </div>
    </>    
}

export default UserNavbar
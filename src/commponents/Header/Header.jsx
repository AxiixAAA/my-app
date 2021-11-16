import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = (props) => {
    // debugger
    return <header className={s.header}>
    <img src="https://uprostim.com/wp-content/uploads/2021/02/image199-27-771x720.jpg" />
    
    <div className={s.loginBlock}>
        {props.isAuth
         ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
         : <NavLink to={'/login'}>Login</NavLink> }
    </div>
    
    </header>
}

export default Header;

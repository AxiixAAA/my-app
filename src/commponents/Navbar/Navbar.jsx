import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {

    return <nav className={s.nav}>

    <NavLink to="/profile">
    <div className={s.item}>
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.84 15.63a6.97 6.97 0 008.32 0 8.2 8.2 0 00-8.32 0zM4.7 14.57a7 7 0 1110.6 0 9.7 9.7 0 00-10.6 0zM10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-1.5 7a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6z" fill="currentColor" fill-rule="evenodd"></path></svg>
    Profile </div> </NavLink>

    <NavLink to="/dialogs">
    <div className={s.item}>
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="message_outline_20__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="message_outline_20__message_outline_20"><path id="message_outline_20__Shape" opacity=".4" d="M0 0h20v20H0z"></path><path d="M6.83 15.75c.2-.23.53-.31.82-.2.81.3 1.7.45 2.6.45 3.77 0 6.75-2.7 6.75-6s-2.98-6-6.75-6S3.5 6.7 3.5 10c0 1.21.4 2.37 1.14 3.35.1.14.16.31.15.49-.04.76-.4 1.78-1.08 3.13 1.48-.11 2.5-.53 3.12-1.22zM3.24 18.5a1.2 1.2 0 01-1.1-1.77A10.77 10.77 0 003.26 14 7 7 0 012 10c0-4.17 3.68-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.68 7.5-8.25 7.5c-.92 0-1.81-.13-2.66-.4-1 .89-2.46 1.34-4.35 1.4z" id="message_outline_20__Icon-Color" fill="currentColor" fill-rule="nonzero"></path></g></g></svg>           
    Messages </div> </NavLink>
    
    <NavLink to="/users" >
    <div className={s.item}>
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><g clip-rule="evenodd" fill-rule="evenodd"><path d="M6.25 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM2.69 11.57c.96-.55 2.22-.82 3.56-.82s2.6.27 3.56.82c.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54H3.5c-.61 0-1.24-.15-1.72-.54-.5-.4-.78-1-.78-1.71 0-1.21.71-2.12 1.69-2.68zm.75 1.3c-.65.37-.94.84-.94 1.38 0 .3.1.44.22.54.14.11.4.21.78.21H9c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38-.66-.39-1.65-.62-2.81-.62s-2.15.23-2.81.62zM13.75 3.5a3 3 0 100 6 3 3 0 000-6zm-1.5 3a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"></path></g><path d="M13.75 12.25c-.23 0-.45.01-.68.03a.75.75 0 11-.14-1.49c.27-.03.54-.04.82-.04 1.34 0 2.6.27 3.56.82.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54h-3a.75.75 0 010-1.5h3c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38a5.77 5.77 0 00-2.81-.62z"></path></g></svg>
    Friends </div> </NavLink>

    {/* <NavLink to="/music">
    <div className={s.item}>
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="music_outline_20__Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="music_outline_20__Icons-20/music_outline_20"><g id="music_outline_20__music_outline_20"><path d="M0 0h20v20H0z"></path><path d="M14.73 2.05a2.28 2.28 0 012.75 2.23v7.99c0 3.57-3.5 5.4-5.39 3.51-1.9-1.9-.06-5.38 3.52-5.38h.37V6.76L8 8.43v5.82c0 3.5-3.35 5.34-5.27 3.62l-.11-.1c-1.9-1.9-.06-5.4 3.51-5.4h.37V6.24c0-.64.05-1 .19-1.36l.05-.13c.17-.38.43-.7.76-.93.36-.26.7-.4 1.41-.54zM6.5 13.88h-.37c-2.32 0-3.34 1.94-2.45 2.82.88.89 2.82-.13 2.82-2.45v-.37zm9.48-1.98h-.37c-2.32 0-3.34 1.94-2.46 2.82.89.89 2.83-.13 2.83-2.45v-.37zm-.02-7.78a.78.78 0 00-.92-.6L9.06 4.77c-.4.09-.54.15-.68.25a.8.8 0 00-.27.33c-.08.18-.1.35-.1.88v.67l7.97-1.67v-.95-.08z" id="music_outline_20__Icon-Color" fill="currentColor" fill-rule="nonzero"></path></g></g></g></svg>
     Music </div> </NavLink>
 
    <NavLink to="/setings">
    <div className={s.item}>
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill="currentColor" fill-rule="evenodd"><path d="M5 6.75c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 015 6.75zM5 10.25c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75z"></path><path d="M7.13 2c-1.61 0-2.34.14-3.08.53-.65.35-1.17.87-1.52 1.52-.4.74-.53 1.47-.53 3.08v5.74c0 1.61.14 2.34.53 3.08.35.65.87 1.17 1.52 1.52.74.4 1.47.53 3.08.53h5.74c1.61 0 2.34-.14 3.08-.53a3.64 3.64 0 001.52-1.52c.4-.74.53-1.47.53-3.08V7.13c0-1.61-.14-2.34-.53-3.08a3.64 3.64 0 00-1.52-1.52c-.74-.4-1.47-.53-3.08-.53zM4.75 3.86c.42-.22.85-.36 2.38-.36h5.74c1.53 0 1.96.14 2.38.36.38.2.69.5.9.9.21.4.35.84.35 2.37v5.74c0 1.53-.14 1.96-.36 2.38-.2.38-.5.69-.9.9-.34.18-.7.3-1.74.34v-2.74a.75.75 0 00-1.5 0v2.75H8v-2.75a.75.75 0 00-1.5 0v2.74c-1.03-.03-1.4-.16-1.75-.35-.38-.2-.69-.5-.9-.9-.21-.4-.35-.84-.35-2.37V7.13c0-1.53.14-1.96.36-2.38.2-.38.5-.69.9-.9zm1 2.14a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5zm0 3.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5z"></path></g></svg>
    Settings </div> </NavLink> */}

  </nav>
}

export default Navbar;

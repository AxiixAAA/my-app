import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";

let Users = ({user,followingInProgress,unfollow,follow}) => {
    return <div className={s.UserContainer}>
            {/* Фото/follow/unfollow */}
          
                <div>
                {/* Жмякаем на мини фотографию, и переходим на профиль пользователя */}
                <NavLink to={'/profile/' + user.id}>
                    <img 
                    src={user.photos.small != null ? user.photos.small : userPhoto}
                    alt="картинка"
                    className={s.userPhoto}
                    />
                </NavLink>
                </div>
                <span>
                    
                <span>
                    <div className={s.UserName}>{user.name}</div>
                    {/* <div>{user.status}</div> */}
                </span>
                {/* follow /  unfollow*/}
                <div className={s.button}>
                    {user.followed
                    ?
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {unfollow(user.id) }}>    
                        Удалить
                    </button>
                    :
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {follow(user.id) }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="add_16__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="add_16__add_16"><path id="add_16__Rectangle-2" d="M0 0h16v16H0z"></path><path d="M9 9v4a1 1 0 01-2 0V9H3a1 1 0 110-2h4V3a1 1 0 112 0v4h4a1 1 0 010 2H9z" id="add_16__Mask" fill="currentColor"></path></g></g></svg>
                        Добавить
                    </button>
                    }
                </div>
           
            {/* Всё что находится под follow /  unfollow */}
            
                {/* <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span> */}
            </span>
        </div>
}


export default Users;
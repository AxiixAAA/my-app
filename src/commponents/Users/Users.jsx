import React from "react";
// import Paginator from "commponents/Common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css"
import Search from "commponents/Common/Search/Search";
import UserNavbar from "./UserNavbar/UserNavbar";

let Users = ({totalUsersCount,pageSize, currentPage,onPageChanged,users,...props}) => {

    return <>
        {/* Список пользователей */}
        {/* <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/> */}
        <div className={s.userPosition}>
            <div className={s.userContainer}>
                {/* Поисковик */}
                <Search/>
                {/* Пользователь */}
                {users.map(u => 
                <User 
                    user={u} 
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />)}
            </div>
            <div className={s.UserNavbar}>
                < UserNavbar />
            </div>
        </div>
   </>
}
export default Users
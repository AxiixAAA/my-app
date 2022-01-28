import React, { FC } from "react";
// import Paginator from "commponents/Common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css"
import Search from "../Common/Search/Search";
import UserNavbar from "./UserNavbar/UserNavbar";
import { UserType } from "../../Types/types";

//PropsType
type PropsType = {
    totalUsersCount: number
    pageSize:number
    currentPage:number
    onPageChanged:number
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: () => void
    follow: () => void
    
}
let Users: FC<PropsType> = ({totalUsersCount,pageSize, currentPage,onPageChanged,users,...props}) => {

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
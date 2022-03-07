import { FC } from "react";
import User from "./User";
import s from "./Users.module.css"
import Search from "../Common/Search/Search";
import UserNavbar from "./UserNavbar/UserNavbar";
import { UserType } from "../../Types/types";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";
import { FilterType } from "../../redux/user-reducer";

//PropsType
type PropsType = {
    totalUsersCount: number
    pageSize:number
    currentPage:number
    onPageChanged: (pageNumber:number) => void
    onFilterChenged: (filter:FilterType) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}
let Users: FC<PropsType> = ({totalUsersCount,pageSize, currentPage,onPageChanged,users,...props}) => {

    return <>

    <UsersSearchForm onFilterChenged={props.onFilterChenged} />
        {/* Список пользователей */}
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


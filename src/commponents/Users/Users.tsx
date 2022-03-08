import { FC, useEffect } from "react";
import User from "./User";
import s from "./Users.module.css"
import Search from "../Common/Search/Search";
import UserNavbar from "./UserNavbar/UserNavbar";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";
import { FilterType, getUsers } from "../../redux/user-reducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getUsersFilter, SelectorUsers } from "../../redux/users-selectors";

export const Users: FC = (props) => {

    const users = useSelector(SelectorUsers)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize, filter))
    },[])

    // Обработчик события Фильтр   
    const onFilterChenged = (filter:FilterType) => {
        dispatch(getUsers(1, pageSize, filter))
    }

    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return <>
    <UsersSearchForm onFilterChenged={onFilterChenged} />
        {/* Список пользователей */}
        <div className={s.userPosition}>
            <div className={s.userContainer}>
                {/* Поисковик */}
                <Search/>
                {/* Пользователь */}
                {users.map(u => 
                <User 
                    user={u} 
                    followingInProgress={followingInProgress}
                    key={u.id}
                    unfollow={unfollow}
                    follow={follow}
                />)}
            </div>
            <div className={s.UserNavbar}>
                < UserNavbar />
            </div>
        </div>
   </>
}


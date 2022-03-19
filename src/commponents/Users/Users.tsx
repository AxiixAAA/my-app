import { FC, useEffect } from "react";
import User from "./User";
import s from "./Users.module.css"
import Search from "../Common/Search/Search";
import UserNavbar from "./UserNavbar/UserNavbar";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";
import { FilterType, getUsers } from "../../redux/user-reducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getUsersFilter, SelectorUsers } from "../../redux/users-selectors";
import { useHistory, useLocation } from "react-router-dom";


export const Users: FC = (props) => {

    const users = useSelector(SelectorUsers)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const queryString = require('query-string');
        const parsed = queryString.parse(location.search) as {term: string; page:string; friend:string }
        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)

        if (!!parsed.term) actualFilter = {...actualFilter, term:parsed.term as string}
        if (!!parsed.friend) actualFilter = {...actualFilter, 
            friend:parsed.friend === "null" ? null
                  : parsed.friend === "true" ? true : false
            }


        dispatch(getUsers(actualPage, pageSize, actualFilter))
    },[])

    useEffect(() => {
        const query: any = {}
        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend) 

        history.push({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}`
        })
    }, [filter])
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


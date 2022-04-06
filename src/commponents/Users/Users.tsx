import { FC, useEffect } from "react";
import User from "./User";
import s from "./Users.module.css"
import Search from "../Common/Search/Search";
import UserNavbar from "./UserNavbar/UserNavbar";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";
import { FilterType, follow, getUsers, unfollow } from "../../redux/user-reducer";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getUsersFilter, SelectorUsers } from "../../redux/users-selectors";
import { useHistory, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';


type Theme = {
    palette : any
}
const useStyles = makeStyles((theme: Theme) => ({
userContainer:{
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    boxShadow:  theme.palette.boxShadow,
    backgroundColor: theme.palette.background.paper,

    borderRadius: '20px',
}
    
}));


export const Users: FC = (props) => {
const classes = useStyles();   

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

    const followw = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfolloww = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return <>
        {/* Список пользователей */}
        <Box className={s.userPosition}>
            <Box className={classes.userContainer}>
                {/* Поисковик */}
                <UsersSearchForm onFilterChenged={onFilterChenged} />
                {/* Пользователь */}
                {users.map(u => 
                <User 
                    user={u} 
                    followingInProgress={followingInProgress}
                    key={u.id}
                    unfolloww={unfolloww}
                    followw={followw}
                />)}
            </Box>
            <Box className={s.UserNavbar}>
                < UserNavbar />
            </Box>
        </Box>
   </>
}


import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/system";
import { TheatersOutlined } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    button:{
        '& > button':{
            width: '120px',
            height: '30px',
         
            backgroundColor: theme.palette.background.button,
            color: theme.palette.text.primary,
            borderRadius: '7px',
            border: 'none',
            cursor: 'pointer',
        
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        '& > svg':{
            marginRight: '5px',
        },
        '& > button:hover':{
            backgroundColor: theme.palette.background.buttonHover,
            color: 'white',
        }
        
    },
    userID:{
        color: theme.palette.text.primary, 
        fontSize: '13px',
        marginBottom: '10px',

        '& > span':{
            color: theme.palette.text.auxiliary
        }
    },
    UserName:{
        marginTop: '10px',
        fontSize: '15px',
        color: theme.palette.text.primary,
        fontFamily: 'Arial',
        fontWeight: '400',

        '& :hover':{
            cursor: 'pointer',
            textDecoration:  'underline',
        }
    },
  }),
);


let User = ({user,followingInProgress,unfollowThunk,followThunk}) => {
const classes = useStyles();   

    return <Box className={s.UserElem}>
            {/* Фото/follow/unfollow */}
                <Box>
                {/* Жмякаем на мини фотографию, и переходим на профиль пользователя */}
                <NavLink to={'/profile/' + user.id}>
                    <img 
                    src={user.photos.small != null ? user.photos.small : userPhoto}
                    alt="картинка"
                    className={s.userPhoto}
                    />
                </NavLink>
                </Box>
                <Box >  
                    {/* Имя пользователя */}
                    <Box>
                        <NavLink to={'/profile/' + user.id}>
                            <Box className={classes.UserName}>{user.name}</Box>
                            <Box className={classes.userID}><span >ID:</span> {user.id}</Box> 
                        </NavLink>
                    </Box>

                    {/* follow /  unfollow*/}
                    <Box className={classes.button}>
                        {user.followed
                        ?
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {unfollowThunk(user.id) }}>    
                            Удалить
                        </button>
                        :
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {followThunk(user.id) }}>
                            {/* <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="add_16__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="add_16__add_16"><path id="add_16__Rectangle-2" d="M0 0h16v16H0z"></path><path d="M9 9v4a1 1 0 01-2 0V9H3a1 1 0 110-2h4V3a1 1 0 112 0v4h4a1 1 0 010 2H9z"id="add_16__Mask" fill="currentColor"></path></g></g></svg> */}
                            Добавить
                        </button>
                        }
                    </Box>
            </Box>
        </Box>
}
export default User;


import React from "react";
import userPhoto from "../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    user:{
        textAlign: 'center',
        width: '70px',
        height: '85px',
        
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        '& * img':{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
        },
        '& * a':{
            color: theme.palette.text.primary,
            fontSize: '12px',
        },

    }
  }),
);


let FriendsMiniBlock = ({user,followingInProgress,unfollowThunk,followThunk}) => {
const classes = useStyles();   

    return <>
            <Box className={classes.user}>
                <Box>
                    {/* Жмякаем на мини фотографию, и переходим на профиль пользователя */}
                    <NavLink to={'/profile/' + user.id}>
                        <img 
                        src={user.photos.small != null ? user.photos.small : userPhoto}
                        alt="картинка"
                        className={classes.userPhoto}
                        />
                    </NavLink>
                </Box>
                <Box >  
                    <NavLink to={'/profile/' + user.id}>
                        <Box className={classes.UserName}>{user.name}</Box>
                    </NavLink>
                </Box>
            </Box>
    </>
}
export default React.memo(FriendsMiniBlock)


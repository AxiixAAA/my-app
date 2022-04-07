import { NavLink } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  
nav:{
    backgroundColor: theme.palette.background.header,
	boxShadow: theme.palette.boxShadow,
    padding: '10px',
	borderRadius:'20px',
	marginBottom: '15px',
	fontSize: '1.2em',

    '& > a':{
        color: '#B3B3B3',
        textDecoration: 'none',
        fontFamily: 'Arial',
      },
    '& > a:hover':{
		display: 'block',
        backgroundColor: theme.palette.background.button,
        color: 'white',
        borderRadius: '10px',
      },
  },
item:{
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',

    '& > svg':{
        marginRight: '12px',
      }
  }

}));



  
const UserNavbar = () =>{
const classes = useStyles();   

    return  <>
         <Box className={classes.nav}>
            <NavLink to="/friends">
                <Box className={classes.item}>
                    Мои друзья
                </Box>
            </NavLink>

            <NavLink to="/users">
                <Box className={classes.item}>
                    Поиск друзей
                </Box>
            </NavLink>
        </Box>
    </>    
}

export default UserNavbar
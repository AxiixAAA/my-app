import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
const useStyles = makeStyles((theme) => ({
  
nav: {
	backgroundColor: theme.palette.background.header,
	boxShadow: theme.palette.boxShadow,
	padding: '10px',
	borderRadius:'20px',
	marginBottom: '15px',
	fontSize: '1.2em',

	'& > a':{
		color:'#B3B3B3',
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
		marginRight: '12px'
	}
}
}));


const Navbar = () => {
  const classes = useStyles();

    return <>
    <Box className={classes.nav}>

    <NavLink to="/profile">
    <div className={classes.item}>
    <AccountCircleIcon />
    Profile </div> </NavLink>

    <NavLink to="/dialogs">
    <div className={classes.item}>
    <ChatIcon />
    Messages </div> </NavLink>
    
    <NavLink to="/users" >
    <div className={classes.item}>
    <PeopleAltIcon />
    Friends </div> </NavLink>

    <NavLink to="/chat" >
    <div className={classes.item}>
	<ForumIcon />
    Forum </div> </NavLink>

    <NavLink to="/settings" >
    <div className={classes.item}>
	<SettingsIcon />
    Settings </div> </NavLink>

  </Box>
  </>
}

export default Navbar;

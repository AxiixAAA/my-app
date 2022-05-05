import avatar from "../../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  DialogItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    borderRadius:'0px 0px 20px 20px',
  },
 
  chatPhoto: {
    display: "flex",
    padding: '0px 5px 0px 5px',
    cursor: "pointer",
    flexDirection: "row",
    fontSize: "14px",
    fontWeight: "30",
    color: theme.palette.text.primary,
    fontFamily: "Arial",
   
    "& * img": {
      with: "0px",
      height: "50px",
      borderRadius: "100%",
      padding: "5px",
    },
    "& > div": {
      marginRight: "10px",      
    },
    "& :nth-child(2n)": {
        paddingTop: '7px',    
    },
    "&:hover": {
      backgroundColor: theme.palette.background.backgroundHover,
    },
  },
}));

let DialogItem = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.DialogItem}>
      <NavLink to="/message">
        <Box className={classes.chatPhoto}>
          <Box>
            <img
              src={props.icon != null ? props.icon : avatar}
              alt="картинка"
            />
          </Box>
          <Box>{props.name}</Box>
        </Box>
      </NavLink>
    </Box>
  );
};

export default DialogItem;

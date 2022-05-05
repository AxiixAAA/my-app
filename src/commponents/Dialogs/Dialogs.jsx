import { NavLink, Redirect } from "react-router-dom";
import DialogItem from "./DialogItem.jsx/DialogItem";
import chatPhoto from "../../assets/images/chat.png";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  dialogs: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
    boxShadow: theme.palette.boxShadow,  
     
  },
  chatPhoto: {
    display: "flex",
    padding: '10px 10px 5px 10px',
    cursor: "pointer",
    flexDirection: "row",
    fontSize: "14px",
    fontWeight: "300",
    // borderBottom: theme.palette.borderBottom,
    color: theme.palette.text.primary,
    fontFamily: "Arial",
    borderRadius: '20px',
    boxShadow: '0 -10px 10px -10px crimson inset',

    "& * img": {
      with: "0px",
      height: "48px",
      borderRadius: "100%",
      boxShadow: theme.palette.boxShadow,
      padding: "5px",
    },
    '& > div':{
        marginRight: '10px'
    },
    '&:hover':{
        backgroundColor: theme.palette.background.backgroundHover
    }, 
  },
}));

let Dialogs = (props) => {
  const classes = useStyles();

//   let state = props.dialogsPage;

//   let dialogsElements = state.dialogs.map((d) => (
//     <DialogItem name={d.name} icon={d.icon} key={d.id} id={d.id} />
//   ));

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <Box className={classes.dialogs}>
      <NavLink to="/chat">
        <Box className={classes.chatPhoto}>
          <Box>
            <img src={chatPhoto} alt="" />
          </Box>
          <Box>Общий чат</Box>
        </Box>
      </NavLink>

      {/* <Box className={classes.dialogsItems}>{dialogsElements}</Box> */}
    </Box>
  );
};

export default Dialogs;

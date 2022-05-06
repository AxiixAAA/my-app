// import { NavLink, Redirect } from "react-router-dom";
// import { Box } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { Opponents } from "./Opponents/Opponents";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getCurrentOpponentSelector,
//   getOpponentMessagesSelector,
//   getOpponentsSelector,
// } from "../../redux/selectors/dialogsSelector";
// import { useEffect } from "react";
// import { getDialogsOpponents } from "../../redux/dialogs-reducer";
// import { getUserProfile } from "../../redux/profile-reducer";
// import { getAuthUserId } from "../../redux/selectors/authSelector";
// import { Messages } from "./Messages/Messages";

// const useStyles = makeStyles((theme) => ({
//   dialogs: {
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: theme.palette.background.paper,
//     borderRadius: "20px",
//     boxShadow: theme.palette.boxShadow,
//   },
//   chatPhoto: {
//     display: "flex",
//     padding: "10px 10px 5px 10px",
//     cursor: "pointer",
//     flexDirection: "row",
//     fontSize: "14px",
//     fontWeight: "300",
//     // borderBottom: theme.palette.borderBottom,
//     color: theme.palette.text.primary,
//     fontFamily: "Arial",
//     borderRadius: "20px",
//     boxShadow: "0 -10px 10px -10px crimson inset",

//     "& * img": {
//       with: "0px",
//       height: "48px",
//       borderRadius: "100%",
//       boxShadow: theme.palette.boxShadow,
//       padding: "5px",
//     },
//     "& > div": {
//       marginRight: "10px",
//     },
//     "&:hover": {
//       backgroundColor: theme.palette.background.backgroundHover,
//     },
//   },
//   messages: {
//     width: "500px",
//     height: "500px",
//     border: "3px solid red",
//   },
// }));

// let Dialogs = (props) => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const opponents = useSelector(getOpponentsSelector);
//   const authId = useSelector(getAuthUserId);
//   const messages = useSelector(getOpponentMessagesSelector);
//   const currentOpponent = useSelector(getCurrentOpponentSelector);
//   const authProfile = useSelector(getUserProfile);

//   useEffect(() => {
//     dispatch(getDialogsOpponents());
//     dispatch(getUserProfile(authId));
//   console.log(opponents);

//   }, []);

//   if (!props.isAuth) return <Redirect to={"/login"} />;
//   return (
//     <>
//       {/* <Box className={classes.dialogs}> */}
//       <Box>
//         {/* <NavLink to="/dialogs/" > */}
//           <Opponents opponents={opponents} />
//         {/* </NavLink> */}
//       </Box>
//       <Box className={classes.messages}>
//         <Messages
//           messages={messages}
//           currentOpponent={currentOpponent}
//           authProfile={authProfile}
//         />
//       </Box>
//     </>
//   );
// };

// export default Dialogs;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDialogsOpponents } from "../../redux/dialogs-reducer";
import { getUserProfile } from "../../redux/profile-reducer";
import { getAuthUserId } from "../../redux/selectors/authSelector";
import { getCurrentOpponentSelector, getOpponentMessagesSelector, getOpponentsSelector } from "../../redux/selectors/dialogsSelector";
import { getUserProfileSelector } from "../../redux/selectors/userProfileSelector";
import { InputField } from "./InputField/InputField";
import { Messages } from "./Messages/Messages";
import { Opponents } from "./Opponents/Opponents";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    dialogs: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'var(--font-grey)',
        width: '100%',
        border: '1px solid green'
    },
    dialogList: {
        width: '200px',
        overflowY: 'auto',
        overflowX: 'hidden',

// >>>>>>>>>>>>>>>>>
        border: '2px solid green',
// >>>>>>>>>>>>>>>>>
    },
    messages: {
        marginLeft: '10px',
    },
}));

const Dialogs = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const authProfile = useSelector(getUserProfileSelector)
    const currentOpponent = useSelector(getCurrentOpponentSelector)
    const messages = useSelector(getOpponentMessagesSelector)
    const opponents = useSelector(getOpponentsSelector)
    const authId = useSelector(getAuthUserId)
    useEffect(() => {
        dispatch(getDialogsOpponents())
        dispatch(getUserProfile(authId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Box className={classes.dialogs}>
            <Box className={classes.dialogList}>
                <Opponents opponents={opponents} />
            </Box>
            <Box className={classes.messages}>
                <Messages messages={messages}
                    currentOpponent={currentOpponent}
                    authProfile={authProfile}
                />
            </Box>
        </Box>
    )
}

export default React.memo(Dialogs)
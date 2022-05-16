import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDialogsOpponents } from "../../redux/dialogs-reducer";
import { getUserProfile } from "../../redux/profile-reducer";
import { getAuthUserId } from "../../redux/selectors/authSelector";
import {
  getCurrentOpponentSelector,
  getOpponentMessagesSelector,
  getOpponentsSelector,
} from "../../redux/selectors/dialogsSelector";
import { getUserProfileSelector } from "../../redux/selectors/userProfileSelector";
import { InputField } from "./InputField/InputField";
import { Messages } from "./Messages/Messages";
import { Opponents } from "./Opponents/Opponents";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  dialogs: {
    display: "flex",
    justifyContent: "space-between",
    color: "var(--font-grey)",
    width: "100%",
    // border: "1px solid green",
  },
  dialogList: {
    width: "200px",
    overflowY: "auto",
    overflowX: "hidden",

    // >>>>>>>>>>>>>>>>>
    // border: "2px solid green",
    // >>>>>>>>>>>>>>>>>
  },
  messages: {
    marginLeft: "10px",
  },
 
}));

const Dialogs = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const authProfile = useSelector(getUserProfileSelector);
  const currentOpponent = useSelector(getCurrentOpponentSelector);
  const messages = useSelector(getOpponentMessagesSelector);
  const opponents = useSelector(getOpponentsSelector);
  const authId = useSelector(getAuthUserId);
  useEffect(() => {
    dispatch(getDialogsOpponents());
    dispatch(getUserProfile(authId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box className={classes.dialogs}>
      <Box className={classes.dialogList}>
        <Opponents opponents={opponents} />
      </Box>
      <Box className={classes.messages}>
        <Messages
          messages={messages}
          currentOpponent={currentOpponent}
          authProfile={authProfile}
        />
          <InputField currentOpponent={currentOpponent} />
      </Box>
    </Box>
  );
};

export default React.memo(Dialogs);

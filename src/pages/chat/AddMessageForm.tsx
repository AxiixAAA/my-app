import { Box, InputAdornment, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { seendMessage } from "../../redux/chat-reducer";
import SendIcon from "@mui/icons-material/Send";

type Theme = {
  palette: any;
};
const useStyles = makeStyles((theme: Theme) => ({
  AddMessageForm: {
  width:'90%',
  marginLeft:'-5%',

    "& .MuiTextField-root": {
        // width: '100wh',
        
      margin: "15px",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "8px",
      border: "none",
      boxShadow: theme.palette.boxShadow,

      "& .MuiOutlinedInput-root": {
        padding: "9px 0px 10px 13px",
      },
      "& .MuiOutlinedInput-input": {
        fontSize: "14px",
        fontFamily: "monospace",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
        // boxShadow: theme.palette.boxShadow,
      },

      "& .MuiInputAdornment-root": {
        color: theme.palette.background.buttonEnd,
        cursor: "pointer",
      },
    },
  },
  containerAddMessageForm: {
    minHeight: "70px",
    width: "100%",
    boxShadow: theme.palette.boxShadow,
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px 20px 0px 0px",
    position: "absolute",
    left: "0",
    bottom: "0",
  },
}));

// wrap="soft
// ФОРМА
const AddMessageForm: React.FC<{}> = () => {
  const classes = useStyles();

  //   const {
  //     AddMessageFormMUI
  //   } = useMessagesStyles();

  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const sendMessageHandler = () => {
    if (!message) {
      return;
    }
    dispatch(seendMessage(message));
    setMessage("");
  };

  return (
    <Box className={classes.containerAddMessageForm}>
      <Box className={classes.AddMessageForm}>
        <TextField
          multiline
          autoFocus
          maxRows={4}
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          fullWidth
          placeholder="Напишите что-нибудь..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SendIcon onClick={sendMessageHandler} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};
export default React.memo(AddMessageForm);

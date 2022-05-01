import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startMessagesListenung,
  stoptMessagesListenung,
} from "../../redux/chat-reducer";
import { AppStateType } from "../../redux/redux-store";
import Messages from "./Messages";

// ЧАТ
const Chat: FC = () => {

  const dispatch = useDispatch();
  const status = useSelector((state: AppStateType) => state.chat.status);

  useEffect(() => {
    dispatch(startMessagesListenung());
    return () => {
      dispatch(stoptMessagesListenung());
    };
  }, []);

  return (
    <>
      <div style={{ color: "white" }}>
        {status === "error" &&
          alert("Some error occured. Please refresh the page")}
        <Messages />
      </div>
    </>
  );
};

export default React.memo(Chat);

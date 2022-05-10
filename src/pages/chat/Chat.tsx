import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startMessagesListening,
  stopMessagesListening,
} from "../../redux/chat-reducer";
import { TGlobalState } from "../../redux/reduxStore";
import Messages from "./Messages";

// ЧАТ
const Chat: FC = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: TGlobalState) => state.chat.status);

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stopMessagesListening());
    };
  }, []);

  return (
    <>
      {status === "error" && (
        <div>Some error occured. Please refresh the page</div>
      )}
      <Messages />
    </>
  );
};

export default React.memo(Chat);

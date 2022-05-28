import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getIsAuth } from "../../redux/users-selectors";
import AddMessageForm from "./AddMessageForm";
import Chat from "./Chat";


// ТИП ЧАТА
export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

// СТРАНИЦА ЧАТА
const ChatPage: React.FC = () => {

    const isAuth = useSelector(getIsAuth)

    if (!isAuth) {
        return <Redirect to={"/login"} />;
    }
  return (
    <>
      <div style={{ color: "white", position: 'relative', minHeight: '100%'}}>
        <Chat />
        <AddMessageForm/>
      </div>
    </>
  );
};

export default React.memo(ChatPage)


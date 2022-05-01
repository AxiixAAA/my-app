import React from "react";
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


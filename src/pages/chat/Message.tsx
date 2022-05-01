import React, { FC } from "react";
import { ChatMessageType } from "./ChatPage";
import { useMessagesStyles } from "./style";

// СООБЩЕНИЕ
const Message: FC<{ message: ChatMessageType }> = React.memo(({ message }) => {
  const {
    ContainerMessageMUI,
    MessageuserDivideMUI,
    MessagePhotoMUI,
    MessageuserNameMUI,
    MessageNewMessageMUI,
  } = useMessagesStyles();

  return (
    <>
      <ContainerMessageMUI>
        <MessagePhotoMUI>
          <img src={message.photo} />
        </MessagePhotoMUI>
        <MessageuserDivideMUI>
          <MessageuserNameMUI>{message.userName}</MessageuserNameMUI>
          <MessageNewMessageMUI>{message.message}</MessageNewMessageMUI>
        </MessageuserDivideMUI>
      </ContainerMessageMUI>
    </>
  );
});

export default React.memo(Message);

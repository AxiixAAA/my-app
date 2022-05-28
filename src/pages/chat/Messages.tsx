import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { TGlobalState } from "../../redux/reduxStore";
import Message from "./Message";
import { useMessagesStyles } from "./style";

// CООБЩЕНИЯ
const Messages: FC = () => {
  const { ContainerMessagesMUI } = useMessagesStyles();

  const messages = useSelector((state: TGlobalState) => state.chat.messages);
  const messagesAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesAnchorRef.current?.scrollIntoView(true);
  }, [messages]);

  return (
    <>
      <ContainerMessagesMUI >
        {messages.map((m, index) => (
          <Message key={index} message={m} />
        ))}
        <div ref={messagesAnchorRef}></div>
      </ContainerMessagesMUI>
    </>
  );
};

export default React.memo(Messages);

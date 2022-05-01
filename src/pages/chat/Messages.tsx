import React, { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { AppStateType } from "../../redux/redux-store";
import Message from "./Message";
import { useMessagesStyles } from "./style";

// CООБЩЕНИЯ
const Messages: FC = () => {
  const { ContainerMessagesMUI } = useMessagesStyles();

  const messages = useSelector((state: AppStateType) => state.chat.messages);
  const messagesAnchorRef = useRef<HTMLDivElement>(null);
  const [IsAutoScroll, setIsAutoScroll] = useState(false);
  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;
    if (
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) < 0
    ) {
      !IsAutoScroll && setIsAutoScroll(true);
    }
    return IsAutoScroll && setIsAutoScroll(false);
  };
  //При получении новых сообщений, прокручиваем вниз
  useEffect(() => {
    if (IsAutoScroll) {
      messagesAnchorRef.current?.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <>
      <ContainerMessagesMUI onScroll={scrollHandler}>
        {messages.map((m, index) => (
          <Message key={index} message={m} />
        ))}
        <div ref={messagesAnchorRef}></div>
      </ContainerMessagesMUI>
    </>
  );
};

export default React.memo(Messages);

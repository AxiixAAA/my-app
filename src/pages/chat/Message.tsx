/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { ChatMessageType } from "./ChatPage";
import { useMessagesStyles } from "./style";

// СООБЩЕНИЕ
const Message: FC<{ message: ChatMessageType }> = ({ message }) => {
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
        <NavLink to={"/profile/" + message.userId}>
          <MessagePhotoMUI>
            <img src={message.photo} />
          </MessagePhotoMUI>
        </NavLink>
        <MessageuserDivideMUI>
          <NavLink to={"/profile/" + message.userId}>
            <MessageuserNameMUI>{message.userName}</MessageuserNameMUI>
          </NavLink>
          <MessageNewMessageMUI>{message.message}</MessageNewMessageMUI>
        </MessageuserDivideMUI>
      </ContainerMessageMUI>
    </>
  );
};

export default React.memo(Message);

// const prevCount = usePrevious({ message });

// // Hook
// function usePrevious(value: any) {
//   // The ref object is a generic container whose current property is mutable ...
//   // ... and can hold any value, similar to an instance property on a class
//   const ref = useRef();
//   // Store current value in ref
//   useEffect(() => {
//     ref.current = value;
//   }, [value]); // Only re-run if value changes
//   // Return previous value (happens before update in useEffect above)
//   return ref.current;
// }

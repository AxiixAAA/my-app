import React, { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { seendMessage, startMessagesListenung, stoptMessagesListenung } from "../../redux/chat-reducer"
import { AppStateType } from "../../redux/redux-store"

// ТИП ЧАТА
export type ChatMessageType = {
    message: string
    photo:   string
    userId:  number
    userName: string
}

// СТРАНИЦА ЧАТА
const ChatPage: React.FC = () => {
    return<>
    <div style={{color:'white'}}>
        <Chat />
    </div>
    </>
}

// ЧАТ
const Chat: FC = () => {
    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(()=>{
        dispatch(startMessagesListenung())
        return () => {
            dispatch(stoptMessagesListenung())
        }
    },[])
    
    return<>
    <div style={{color:'white'}}>
        <Messages />
        <AddMessageForm />
    </div>
    </>
}

// CООБЩЕНИЯ
const Messages: FC = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    
    return<>
    <div style={{color:'white', overflowY: 'auto', height:'500px', backgroundColor:'#2B2B2B'}}>
        {messages.map((m, index) => <Message key={index} message={m}/>)}
    </div>
    </>
}

// СООБЩЕНИЕ
const Message: FC<{message: ChatMessageType}> = ({message}) => {

    return<>
    <div style={{color:'white'}}>
       <img src={message.photo} style={{width:'40px'}}/> <b>{message.userName}</b> 
       <br />
       <p>{message.message}</p>
        <hr/>
    </div>
    </>
}

// ФОРМА
const AddMessageForm: React.FC<{}> = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

    const sendMessageHandler = () => {
        if (!message) {
            return
        }
    dispatch(seendMessage(message))
    setMessage('')
    }

    return<>
    <div style={{color:'white'}}>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</button>
        </div>
    </div>
    </>
}

export default ChatPage
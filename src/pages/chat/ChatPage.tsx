import React, { useEffect, useState } from "react"

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
const Chat: React.FC = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)
    // Созданеи Channel
    useEffect(()=>{
        let ws: WebSocket;
        const closeHandler = () => {
            console.log('CLOSE WS');
            setTimeout(createChannel, 3000);
        }
        function createChannel() {
            ws?.removeEventListener('close',closeHandler)
            ws?.close()
            // Подписка на канал -Channel
            ws = new WebSocket(`wss://social-network.samuraijs.com/handlers/ChatHandler.ashx`)
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)    
        }
        createChannel();

        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    },[])
    
    return<>
    <div style={{color:'white'}}>
        <Messages wsChannel={wsChannel} />
        <AddMessageForm wsChannel={wsChannel}/>
    </div>
    </>
}

// CООБЩЕНИЯ
const Messages: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])
    useEffect(() => {
        // Подписка на сообщения
        let messageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessage) => [...prevMessage,...newMessages]);
        }
        wsChannel?.addEventListener('message', messageHandler)
        
        return () => {
            wsChannel?.addEventListener('message', messageHandler)
        }
    }, [wsChannel])

    return<>
    <div style={{color:'white', overflowY: 'auto', height:'500px', backgroundColor:'#2B2B2B'}}>
        {messages.map((m, index) => <Message key={index} message={m}/>)}
    </div>
    </>
}

// СООБЩЕНИЕ
const Message: React.FC<{message: ChatMessageType}> = ({message}) => {

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
const AddMessageForm: React.FC<{wsChannel: WebSocket  | null}> = ({wsChannel}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setreadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect (() =>{
        let openHandler = () => {
            setreadyStatus('ready');
        }
        wsChannel?.addEventListener('open', openHandler)
        return () => {
        wsChannel?.addEventListener('open', openHandler)
        }
    },[wsChannel])

    const sendMessage = () => {
        if (!message) {
            return
        }
    wsChannel?.send(message)
    setMessage('')
    }

    return<>
    <div style={{color:'white'}}>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <button disabled={wsChannel === null || readyStatus !== 'ready' } onClick={sendMessage}>Send</button>
        </div>
    </div>
    </>
}

export default ChatPage
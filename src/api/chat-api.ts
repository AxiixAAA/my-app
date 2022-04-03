
let subscribers = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-chenged': [] as StatusReceivedSubscriberType[], 
}

let ws: WebSocket | null = null;
type EventsNamesType = 'messages-received' | 'status-chenged'

const closeHandler = () => {
    notifySubscribersAboutStatus('pending')

    setTimeout(createChannel, 3000);
}
// Подписка на сообщения
const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers['messages-received'].forEach(s => s(newMessages))
}
// Подписка на 
const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}
// Подписка на 
const errorHandler = () => {
    notifySubscribersAboutStatus('error')
    console.error('REFRESH PAGE');
    
}
const cleanUp = () => {
    ws?.removeEventListener('close',closeHandler)
    ws?.removeEventListener('message', messageHandler) 
    ws?.addEventListener('open', openHandler)  
    ws?.addEventListener('error', errorHandler)  
}
const notifySubscribersAboutStatus = (status: statusType) => {
    subscribers['status-chenged'].forEach(s => s(status))
}
function createChannel() {
    cleanUp()
    ws?.close()
    // Подписка на канал -Channel
    ws = new WebSocket(`wss://social-network.samuraijs.com/handlers/ChatHandler.ashx`)
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler)  
    ws.addEventListener('message', messageHandler)  
    ws.addEventListener('open', openHandler)  
    ws.addEventListener('error', errorHandler)  
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers['messages-received'] = []
        subscribers['status-chenged'] = []
        cleanUp() 
        ws?.close()
    },
    subscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusReceivedSubscriberType) {
        // @ts-ignore
        subscribers[eventName].push(callback)
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s! === callback)
        }
    },
    unsubscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusReceivedSubscriberType) {
         // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s! === callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}



type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void
type StatusReceivedSubscriberType = (status: statusType) => void


export type ChatMessageType = {
    message: string
    photo:   string
    userId:  number
    userName: string
}

export type statusType = 'pending' | 'ready' | 'error'
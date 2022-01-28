const SEND_MESSAGE = "SEND-MESSAGE";

type DialogsType = {
    id: number
    icon: null
    name: string
}
type MessagesType = {
    id: number
    message:string 
}

//state
let initialState = {
    dialogs: [
        { id: 1, icon: null, name: "Вячеслав Елдышов" },
        { id: 2, icon: null, name: "Ivan Agapov" },
        { id: 3, icon: null, name: "Катя Ефимова" },
        { id: 4, icon: null, name: "Иван Бобров" },
        { id: 5, icon: null, name: "СберКот" },
    ] as Array<DialogsType>,
    messages: [
        { id: 1, message: "1" },
        { id: 2, message: "2" },
        { id: 3, message: "3" },
        { id: 4, message: "4" },
        { id: 5, message: "5" },
    ] as Array<MessagesType>,
};

export type InitialStateType = typeof initialState

//Reducer
const dialogsReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        // Отправить сообщение
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }],
            }
        }

        default:
        return state;
    }
};

type sendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

// Action creator чистая функция которая возвращает action
export const sendMessageCreator = (newMessageBody:string):sendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;

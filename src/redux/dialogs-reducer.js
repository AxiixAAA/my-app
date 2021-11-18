const SEND_MESSAGE = "SEND-MESSAGE";

//state
let initialState = {
    dialogs: [
        { id: 1, name: "Вячеслав Тарасов" },
        { id: 2, name: "Олег Чипчик" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Slava" },
    ],
    messages: [
        { id: 1, message: "1" },
        { id: 2, message: "2" },
        { id: 3, message: "3" },
        { id: 4, message: "4" },
        { id: 5, message: "5" },
    ],
 
};

//Reducer
const dialogsReducer = (state = initialState, action) => {
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

// Action creator чистая функция которая возвращает action
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;

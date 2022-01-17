const SEND_MESSAGE = "SEND-MESSAGE";

//state
let initialState = {
    dialogs: [
        { id: 1, icon: null, name: "Вячеслав Елдышов" },
        { id: 2, icon: null, name: "Ivan Agapov" },
        { id: 3, icon: null, name: "Катя Елфимова" },
        { id: 4, icon: null, name: "Иван Бобров" },
        { id: 5, icon: null, name: "СберКот" },
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

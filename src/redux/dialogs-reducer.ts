import { InferActionsTypes } from "./redux-store";

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

//Reducer
const dialogsReducer = (state = initialState, action:ActionsType):InitialStateType => {
    switch (action.type) {
        // Отправить сообщение
        case "SEND-MESSAGE": {
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

export const actions = {
    sendMessage: (newMessageBody:string) => ({ type: "SEND-MESSAGE", newMessageBody } as const)
}

export default dialogsReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>


// import { FormAction } from "redux-form";
// import { dialogsAPI } from "../api/dialogs";
// import { BaseThunkType, InferActionsTypes } from "./redux-store";


// //state
// let initialState = {
//     friendId: null as null | number
// };

// //Reducer
// const dialogsReducer = (state = initialState, action:ActionsType):InitialStateType => {
//     switch (action.type) {
//         // Отправить сообщение
//         // case "SEND-MESSAGE": {
//         //     let body = action.newMessageBody;
//         //     return {
//         //         ...state,
//         //         messages: [...state.messages, { id: 6, message: body }],
//         //     }
//         // }
//         case  "SN/DIALOGS/FRIEND_ID": return{...state, friendId: state.friendId}

//         default:
//         return state;
//     }
// };

// export const actions = {
//     // sendMessage: (newMessageBody:string) => ({ type: "SEND-MESSAGE", newMessageBody } as const),
//     setFriendDialogs: (friendId:number) => ({type:  "SN/DIALOGS/FRIEND_ID", friendId} as const),

// }

// //  Получаем статус
// export const getFriendDialogs = (userId:number):ThunkType =>
//  async (dispatch) => {
//     let data = await dialogsAPI.getFriendDialogs(userId);
//     // dispatch(actions.setFriendDialogs(data));
// }


// export default dialogsReducer

// export type InitialStateType = typeof initialState
// type ActionsType = InferActionsTypes<typeof actions>
// type ThunkType = BaseThunkType<ActionsType | FormAction> //FormAction позволяет диспатчить санки


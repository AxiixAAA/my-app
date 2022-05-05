import { dialogsAPI, TOpponent, TOpponentMessages } from '../api/dialogs'
import { TThunkAction } from '../type/types'
import { InferActionsTypes } from './redux-store'

const GET_OPPONENTS = 'dialogs/GET-OPPONENTS'
const GET_DIALOG_WITH_OPPONENT = 'dialogs/GET-DIALOG-WITH-OPPONENT'
const SET_CURRENT_OPPONENT_ID = 'dialogs/SET-CURRENT-OPPONENT-ID'
// const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

const initialState = {
    opponents: [] as TOpponent[],
    messages: [] as TOpponentMessages[],
    currentOpponent: {} as TOpponent
}

const dialogsReducer = (state = initialState, action: TAction): TState => { 
    switch (action.type) {
        case GET_OPPONENTS:
            return {
                ...state,
                opponents: [...action.data]
            }
        case GET_DIALOG_WITH_OPPONENT:
            return {
                ...state,
                messages: [...action.items]
            }
        case SET_CURRENT_OPPONENT_ID:
            return {
                ...state,
                currentOpponent: action.opponent
            }
        default:
            return state;
    }
}

export const actionCreators = {
    getOpponents: (data: TOpponent[]) => ({ type: GET_OPPONENTS, data } as const),
    getDialogWithOpponent: (items: TOpponentMessages[]) => ({ type: GET_DIALOG_WITH_OPPONENT, items } as const),
    setCurrentOpponent: (opponent: TOpponent) => ({ type: SET_CURRENT_OPPONENT_ID, opponent } as const)
}

export const getDialogsOpponents = (): TThunk => async (dispatch) => {
    const data: TOpponent[] = await dialogsAPI.getDialogsOpponents()
    dispatch(actionCreators.getOpponents(data))
}

export const getDialogWithOpponent = (userId: number): TThunk => async (dispatch) => {    
    const data = await dialogsAPI.getDialogWithOpponent(userId)
    dispatch(actionCreators.getDialogWithOpponent(data.items))
}

export const sendMessage = (userId: number, message: string): TThunk => async (dispatch) => {
    const data = await dialogsAPI.sendUserMessage(userId, message)
    data.resultCode === 0 && dispatch(getDialogWithOpponent(userId))
}

export const startDialog = (userId: number): TThunk => async (dispatch) => {
    const data = await dialogsAPI.startDialog(userId)
    data.resultCode === 0 && dispatch(getDialogsOpponents())
}

export default dialogsReducer;


type TState = typeof initialState
type TAction = InferActionsTypes<typeof actionCreators>
type TThunk = TThunkAction<TAction>


// import { InferActionsTypes } from "./redux-store";

// type DialogsType = {
//     id: number
//     icon: null
//     name: string
// }
// type MessagesType = {
//     id: number
//     message:string 
// }

// //state
// let initialState = {
//     dialogs: [
//         { id: 1, icon: null, name: "Вячеслав Елдышов" },
//         { id: 2, icon: null, name: "Ivan Agapov" },
//         { id: 3, icon: null, name: "Катя Ефимова" },
//         { id: 4, icon: null, name: "Иван Бобров" },
//         { id: 5, icon: null, name: "СберКот" },
//     ] as Array<DialogsType>,
//     messages: [
//         { id: 1, message: "1" },
//         { id: 2, message: "2" },
//         { id: 3, message: "3" },
//         { id: 4, message: "4" },
//         { id: 5, message: "5" },
//     ] as Array<MessagesType>,
// };

// //Reducer
// const dialogsReducer = (state = initialState, action:ActionsType):InitialStateType => {
//     switch (action.type) {
//         // Отправить сообщение
//         case "SEND-MESSAGE": {
//             let body = action.newMessageBody;
//             return {
//                 ...state,
//                 messages: [...state.messages, { id: 6, message: body }],
//             }
//         }

//         default:
//         return state;
//     }
// };

// export const actions = {
//     sendMessage: (newMessageBody:string) => ({ type: "SEND-MESSAGE", newMessageBody } as const)
// }

// export default dialogsReducer

// export type InitialStateType = typeof initialState
// type ActionsType = InferActionsTypes<typeof actions>


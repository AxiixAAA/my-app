import { InferActionsTypes } from './redux-store';
import { getAuthUserData } from "./auth-reducer"

// state
let initialState = {
    initialized: false
};
//
export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
// Reducer
const appReducer = (state = initialState, action:ActionsType): InitialStateType => {
    switch (action.type) {
        case "APPINITIALIZED_SUCCESS":
        return {
            ...state,
            initialized: true
        }
        default: return state
    }
}
//
export const actions = {
    initializedSuccess: () => ({ type: "APPINITIALIZED_SUCCESS"} as const)
}


// Thank - функция которая делает ассинхронную операцию и которая делает дисптчи
// Диспатчим Авторизованного пользователя
export const  initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]) 
    .then(() => {
    dispatch(actions.initializedSuccess());
    })
}

export default appReducer;

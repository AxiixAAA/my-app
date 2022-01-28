import { getAuthUserData } from "./auth-reducer";

// установить пользовательские данные
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type InitialStateType = {
    initialized: boolean
}
// state
let initialState = {
    initialized: false
};

// Reducer
const appReducer = (state = initialState, action:any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
        return {
            ...state,
            initialized: true
        }
        default:
        return state;
    }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

// Action creator чистая функция которая возвращает action
export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS});

// Thank - функция которая делает ассинхронную операцию и которая делает дисптчи
// Диспатчим Авторизованного пользователя
export const  initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]) 
    .then(() => {
    dispatch(initializedSuccess());
    })
}

export default appReducer;

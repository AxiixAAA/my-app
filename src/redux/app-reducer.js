import { getAuthUserData } from "./auth-reducer";

// установить пользовательские данные
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

// state
let initialState = {
    initialized: false
};

// Reducer
const appReducer = (state = initialState, action) => {
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

// Action creator чистая функция которая возвращает action
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS});

// Thank - функция которая делает ассинхронную операцию и которая делает дисптчи
// Диспатчим Авторизованного пользователя
export const  initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]) 
    .then(() => {
    dispatch(initializedSuccess());
    })
}

export default appReducer;

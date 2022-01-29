import { authAPI} from "../api/api";
import { stopSubmit } from "redux-form";
import { AppStateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";

// Action type
const SET_USER_DATA = "React/auth/SET_USER_DATA";

// 
// export type InitialState = {
//     userId: number |null,
//     email:  string |null,
//     login:  string |null,
//     isAuth: boolean
// }
// state
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};
type InitialStateType = typeof initialState
// Reducer
const authReducer = (state = initialState, action:any): InitialStateType => {
     switch (action.type) {
        //Получаем данные о пользователе 
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default: return state
    }
}
// ActionsType
type ActionsType = SetAuthUserDaraActionType
// ActionsTypes
type SetAuthUserDaraActionPayloadType = {
    userId: number| null,
    email:  string| null,
    login:  string| null,
    isAuth: boolean
}
type SetAuthUserDaraActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDaraActionPayloadType
        
}
// Action creator чистая функция которая возвращает action
export const setAuthUserData = (userId:number | null, email:string | null, login:string | null, isAuth:boolean ):SetAuthUserDaraActionType => ({ 
    type: SET_USER_DATA, 
    payload:{userId, email, login, isAuth} })

// Thank - функция которая делает ассинхронную операцию и которая делает дисптчи
// Получаем данные о пользователе 
// ThankType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
export const getAuthUserData = (): ThunkType =>
 async (dispatch) => {
    let response = await authAPI.me();
    //@ts-ignore
    if (response.data.resultCode === 0) {        
        //@ts-ignore 
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

// Логинемся
export const login = (email:string, password:string, rememberMe:boolean):ThunkType =>
 async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    //@ts-ignore
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else{
        //@ts-ignore
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"; 
        //@ts-ignore
        dispatch(stopSubmit("login", {_error: message}));
    }
}

// Вылогиневаемся
export const logout = ():ThunkType =>
 async (dispatch) => {
    let response = await authAPI.logout();
     //@ts-ignore    
    if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;

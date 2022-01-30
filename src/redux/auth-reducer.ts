import { ResultCodesForCapctha, securityAPI } from './../api/api';
import { authAPI, ResultCodesEnum} from "../api/api";
import { stopSubmit } from "redux-form";
import { AppStateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";

// Action type
const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null as null|string
};
type InitialStateType = typeof initialState
// Reducer
const authReducer = (state = initialState, action:any): InitialStateType => {
     switch (action.type) {
        //Получаем данные о пользователе 
        case SET_USER_DATA:
            case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}
// ActionsType
type ActionsType = SetAuthUserDaraActionType | getCaptchaUrlSuccessActionType
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
    
type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl:string}    
}
export const getCaptchaUrlSuccess = (captchaUrl:string):getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})

// Thank - функция которая делает ассинхронную операцию и которая делает дисптчи
// Получаем данные о пользователе 
// ThankType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getAuthUserData = (): ThunkType =>
 async (dispatch) => {
    let meData = await authAPI.me();
    if (meData.resultCode === ResultCodesEnum.Success) {        
        let {id, email, login} = meData.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

// Логинемся
export const login = (email:string, password:string, rememberMe:boolean, captcha:null):ThunkType =>
 async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe,captcha);

    if (loginData.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    }
    else{
        if (loginData.resultCode === ResultCodesForCapctha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }   

        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error"; 
        //@ts-ignore
        dispatch(stopSubmit("login", {_error: message}));
    }
}
// Капча
export const getCaptchaUrl = ():ThunkType => 
  async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
// Вылогиневаемся
export const logout = ():ThunkType =>
 async (dispatch) => {
    let logoutData = await authAPI.logout();
   
    if (logoutData.resultCode === ResultCodesEnum.Success) {
    dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;

import { ResultCodeForCapcthaEnum, ResultCodesEnum} from "../api/api";
import { stopSubmit } from "redux-form";
import { BaseThunkType, TReturnActionType } from "./reduxStore";
import { authAPI } from '../api/auth-api';
import { securityAPI } from '../api/security-api';

let initialState = {
    userId:null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as null|string
};

// Reducer
const authReducer = (state = initialState, action:ActionsType): InitialStateType => {
     switch (action.type) {
        //Получаем данные о пользователе 
        case "SN/auth/SET_USER_DATA":
            case "SN/auth/GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}

export const actions = {
    setAuthUserData: (userId:number|null, email:string|null, login:string|null, isAuth:boolean ) => ({ 
        type: "SN/auth/SET_USER_DATA", 
        payload:{userId, email, login, isAuth} 
    } as const),
    getCaptchaUrlSuccess: (captchaUrl:string) => ({
        type: "SN/auth/GET_CAPTCHA_URL_SUCCESS", payload: {captchaUrl}
    } as const)
}

// Thank - функция которая делает ассинхронную операцию и которая делает дисптчи
// Получаем данные о пользователе 

export const getAuthUserData = ():ThunkType =>
 async (dispatch) => {
    let meData = await authAPI.me();
    if (meData.resultCode === ResultCodesEnum.Success) {        
        let {id, email, login} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
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
        if (loginData.resultCode === ResultCodeForCapcthaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }   
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error"; 
        dispatch(stopSubmit("login", {_error: message}));
    }
}
// Капча
export const getCaptchaUrl = ():ThunkType => 
  async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}
// Вылогиневаемся
export const logout = ():ThunkType =>
 async (dispatch) => {
    let logoutData = await authAPI.logout();
    if (logoutData.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
    }
}
export default authReducer;

type InitialStateType = typeof initialState
type ActionsType = TReturnActionType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>
// @ts-nocheck
import { authAPI, securityAPI} from "../api/api";
import { stopSubmit } from "redux-form";

// Action type
const SET_USER_DATA = "React/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "React/auth/GET_CAPTCHA_URL_SUCCESS";

// state
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

// Reducer
const authReducer = (state = initialState, action) => {
     switch (action.type) {
        //Получаем данные о пользователе 
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        default: return state;
    }
}

// Action creator чистая функция которая возвращает action
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} })
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} })

// Thank - функция которая делает ассинхронную операцию и которая делает дисптчи
// Получаем данные о пользователе 
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {         
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

// Логинемся
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
         
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else{
        if (response.data.resultCode === 10) {
            dispatch(getCapthcaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"; 
        dispatch(stopSubmit("login", {_error: message}));
    }
}

// Вылогиневаемся
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
         
    if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
    }
}

// капча
export const getCapthcaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCapthcaUrl();
    const captchaUrl = response.data.url; 
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;

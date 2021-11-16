import { authAPI } from "api/api";
import { stopSubmit } from "redux-form";


// установить пользовательские данные
const SET_USER_DATA = "SET_USER_DATA";


// state
let initialState = {
  userId: null,
  email: null,
  login: null,
  // Если не зарегистрирован
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
          ...state,
          // в data передаём userId, email, login
          ...action.payload,
      }

    default:
      return state;
  }
}


// Экшен креaтер чистая функция которая возвращает экшен
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} })

export const getAuthUserData = () => (dispatch) => {
  authAPI.me()
  .then((response) => {
    // @ts-ignore
    if (response.data.resultCode === 0) {
        // @ts-ignore
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
  });
  return "React"
}

export const login = (email, password, rememberMe) => (dispatch) => {

  authAPI.login(email, password, rememberMe)
  .then((response) => {
    // @ts-ignore
    if (response.data.resultCode === 0) {
       dispatch(getAuthUserData())
    }else{
      // @ts-ignore
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
      dispatch(stopSubmit("login", {_error: message}));
    }
  });
}

export const logout = () => (dispatch) => {
  authAPI.logout()
  .then((response) => {
    // @ts-ignore
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
}

export default authReducer;

import { getAuthUserData } from "./auth-reducer";


// установить пользовательские данные
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


// state
let initialState = {
  initialized: false
};

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


// Экшен креaтер чистая функция которая возвращает экшен
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS});

export const  initializApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  debugger
  Promise.all([promise]) 
  .then(() => {
  dispatch(initializedSuccess());
  })
}

export default appReducer;

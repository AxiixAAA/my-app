import { profileAPI, usersAPI } from "api/api";

// Экшены
const ADD_POST = "ADD-POST";

const SET_USER_PROFILE = "SET_USER_PROFILE ";
const SET_STATUS = "SET_STATUS ";


let initialState = {
  posts: [
    { id: 1, message: "Привет мир!", likesCount: 12 },
    { id: 2, message: "Здраствуй сынок!", likesCount: 11 },
    { id: 3, message: "Привет Pa!", likesCount: 15 },
    { id: 4, message: "Salam!", likesCount: 111 },
  ],

  // инициализируем profile в стейте, делаем заглушку null
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    
    case SET_USER_PROFILE: {
      // копируем стейт, меняем profile: на профаил который сидит в экшене
      return{...state, profile: action.profile}
    }
    case SET_STATUS: {
      return{
        ...state,
        status: action.status
      }
    }
    default:
      return state;
  };
};

// Action Creater - функция которая возвращает обьект Экшен
// Экшен - Обьект в котором инкапсулированны все данные дя того что бы
// - редьюсер получил этот экшен и пременил изменения на стейт
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
//                                            type: название действия что нужно сделать
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({ type: SET_STATUS, status});

// Thunk
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
}

// Thunk
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
  .then(response => {
    dispatch(setStatus(response.data));
  });
}
// Thunk update статус
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
  .then(response => {
    // @ts-ignore
    if (response.data.resultCode === 0){
    dispatch(setStatus(status));
    }
  });
}



export default profileReducer;

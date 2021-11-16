// @ts-nocheck
import { profileAPI, usersAPI } from "api/api";

// Action type 
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE ";
const SET_STATUS = "SET_STATUS ";

// kolhoz state
let initialState = {
  posts: [
    { id: 1, message: "Привет мир!", likesCount: 12 },
    { id: 2, message: "Здраствуй сынок!", likesCount: 11 },
    { id: 3, message: "Привет Pa!", likesCount: 15 },
    { id: 4, message: "Salam!", likesCount: 111 },
  ],
  
  profile: null,
  status: ""
};

// Reducer
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        // Добавить запись
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        }
        
        // Получить профиль пользователя
        case SET_USER_PROFILE: {return{...state, profile: action.profile}}
        
        // Получить статус пользователя
        case SET_STATUS: {return{...state,status: action.status}}

        default: return state;
    };
};

// Action creator чистая функция которая возвращает action
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({ type: SET_STATUS, status});

// Thank - функция которая делает ассинхронную операцию и которая делает дисптчи
// Поучаем все данные о пользователе
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
}

//  Получаем статус
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
    });
}

// Изменяем статус
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0){
            dispatch(setStatus(status))}
    });
}

export default profileReducer;

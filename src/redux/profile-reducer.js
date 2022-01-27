// @ts-nocheck
import { profileAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";

// Action type 
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE ";
const SET_STATUS = "SET_STATUS ";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

// kolhoz state
let initialState = {
  posts: [
    { id: 1, fullName: null, message: "Привет мир!", likesCount: 12 },
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
                fullName:action.fullName,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        }
        //  DELETE_POST
        case  DELETE_POST: return{...state, posts: state.posts.filter(p=> p.id !== action.postId)}
        
        // Получить профиль пользователя
        case SET_USER_PROFILE: return{...state, profile: action.profile}
        
        // Получить статус пользователя
        case SET_STATUS: return{...state,status: action.status}

        //
        case SAVE_PHOTO_SUCCESS: return{...state,profile:{...state.profile, photos: action.photos}}

        default: return state;
    };
};

// Action creator чистая функция которая возвращает action
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({ type: SET_STATUS, status});
export const deletePost = (postId) => ({type:  DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type:  SAVE_PHOTO_SUCCESS, photos})

// Thank - функция которая делает ассинхронную операцию и которая делает дисптчи
// Поучаем все данные о пользователе
export const getUserProfile = (userId) => async (dispatch) => {
    // В response будет сидеть результат которым зарезолвится промис
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

//  Получаем статус
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

// Изменяем статус
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0){
        dispatch(setStatus(status))
    }
}

// Изменяем фото профиля
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

// Изменяем фото профиля
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0){
        dispatch(getUserProfile(userId));
    }else{
        // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0]} }));
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }));
        return Promise.reject(response.data.message);
    }
}

export default profileReducer;

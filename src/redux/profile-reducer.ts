import { profileAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { PhotosType, PostType, ProfileType } from "../Types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";

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
  ] as Array<PostType>,
  
  profile: null as ProfileType|null,
  status: '',
  newPostText: ''
};

export type InitialStateType = typeof initialState
// Reducer
const profileReducer = (state = initialState, action:any):InitialStateType => {
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
        case SAVE_PHOTO_SUCCESS: return{...state,profile:{...state.profile, photos: action.photos} as ProfileType}

        default: return state;
    };
};

//Action type
type ActionsType = addPostActionCreatorActionType|SetUserProfileActionType|SetStatusActionType|
                   DeletePostActionType|SavePhotoSuccessActionType

type addPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}
// Action creator чистая функция которая возвращает action
export const addPostActionCreator = (newPostText:string):addPostActionCreatorActionType => ({ type: ADD_POST, newPostText });
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile:ProfileType
}
export const setUserProfile = (profile:ProfileType):SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile});
type SetStatusActionType = {
    type: typeof SET_STATUS
    status:string
}
export const setStatus = (status:string):SetStatusActionType => ({ type: SET_STATUS, status});
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId:number
}
export const deletePost = (postId:number):DeletePostActionType => ({type:  DELETE_POST, postId})
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos:PhotosType
}
export const savePhotoSuccess = (photos:PhotosType):SavePhotoSuccessActionType => ({type:  SAVE_PHOTO_SUCCESS, photos})

// Thank - функция которая делает ассинхронную операцию и которая делает дисптчи
// Поучаем все данные о пользователе
//
// type GetStateType = () => AppStateType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
export const getUserProfile = (userId:number):ThunkType =>
 async (dispatch) => {
    // В response будет сидеть результат которым зарезолвится промис
    let response = await usersAPI.getProfile(userId);
    //@ts-ignore
    dispatch(setUserProfile(response.data));
}

//  Получаем статус
export const getStatus = (userId:number):ThunkType =>
 async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    //@ts-ignore
    dispatch(setStatus(response.data));
}

// Изменяем статус
export const updateStatus = (status:string):ThunkType =>
 async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    //@ts-ignore
    if (response.data.resultCode === 0){
        dispatch(setStatus(status))
    }
}

// Изменяем фото профиля
export const savePhoto = (file:any):ThunkType =>
 async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    //@ts-ignore
    if (response.data.resultCode === 0){
        //@ts-ignore
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

// Изменяем фото профиля
export const saveProfile = (profile:ProfileType):ThunkType =>
 async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    //@ts-ignore
    if (response.data.resultCode === 0){
        //@ts-ignore 
        dispatch(getUserProfile(userId));//????????????????? 
    }else{
        // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0]} }));
        //@ts-ignore
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }));
        //@ts-ignore
        return Promise.reject(response.data.message);
    }
}

export default profileReducer;

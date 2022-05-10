import { FormAction, stopSubmit } from "redux-form";
import { PhotosType, PostType, ProfileType } from "../type/types";
import { BaseThunkType, TReturnActionType } from "./reduxStore";

import { profileAPI } from "../api/profile-api";
import { ResultCodesEnum } from "../api/api";

// kolhoz state
let initialState = {
  posts: [
    { id: 1, fullName: null, message: "Привет мир!", likesCount: 12 },
  ] as Array<PostType>,
  
  profile: null as ProfileType|null,
  status: '',
  newPostText: ''
};

// Reducer
const profileReducer = (state = initialState, action:ActionsType):InitialStateType => {
    switch (action.type) {
        // Добавить запись
        case "SN/PROFILE/ADD-POST": {
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
        case  "SN/PROFILE/DELETE_POST": return{...state, posts: state.posts.filter(p=> p.id !== action.postId)}
        
        // Получить профиль пользователя
        case "SN/PROFILE/SET_USER_PROFILE ": return{...state, profile: action.profile}
        
        // Получить статус пользователя
        case "SN/PROFILE/SET_STATUS ": return{...state,status: action.status}

        //
        case "SN/PROFILE/SAVE_PHOTO_SUCCESS": return{...state,profile:{...state.profile, photos: action.photos} as ProfileType}

        default: return state;
    };
};

export const actions = {
    addPostActionCreator: (newPostText:string, fullName:string) => ({ type: "SN/PROFILE/ADD-POST", newPostText, fullName } as const),
    setUserProfile: (profile:ProfileType) => ({ type: "SN/PROFILE/SET_USER_PROFILE ", profile} as const),
    setStatus: (status:string) => ({ type: "SN/PROFILE/SET_STATUS ", status} as const),
    deletePost: (postId:number) => ({type:  "SN/PROFILE/DELETE_POST", postId} as const),
    savePhotoSuccess:(photos:PhotosType) => ({type:  "SN/PROFILE/SAVE_PHOTO_SUCCESS", photos} as const)
}

// Получить профиль
export const getUserProfile = (userId:number):ThunkType =>
 async (dispatch) => {
    // В response будет сидеть результат которым зарезолвится промис
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

//  Получаем статус
export const getStatus = (userId:number):ThunkType =>
 async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
}

// Изменяем статус
export const updateStatus = (status:string):ThunkType =>
 async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0){
        dispatch(actions.setStatus(status))
    }
}

// Изменяем фото профиля
export const savePhoto = (file:File):ThunkType =>
 async (dispatch) => {
    let data = await profileAPI.savePhoto(file);

    if (data.resultCode === ResultCodesEnum.Success){
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

// Изменяем фото профиля
export const saveProfile = (profile:File):ThunkType =>
 async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)

    if (data.resultCode === ResultCodesEnum.Success){
        if (userId != null) {
            dispatch(getUserProfile(userId))
        } else {
            throw new Error("userId can't be null")
        }
    }else{
        // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0]} }));
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0] }));
        return Promise.reject(data.messages[0]);
    }
}

export default profileReducer;

export type InitialStateType = typeof initialState
type ActionsType = TReturnActionType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction> //FormAction позволяет диспатчить санки

import { ProfileType } from './../Types/types';
import axios from "axios";
// const { default: axios } = require("axios");
// axios.create - создаёт экземпляр axios с настраиваемой конфигурацией.
const instance = axios.create({
      withCredentials: true,
      baseURL: "https://social-network.samuraijs.com/api/1.0/",
      headers: {"API-KEY": "a0450db5-9e30-42e8-a82d-905ff590711b"},
});

//  Users
export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize} `)
        .then(response => {return response.data})
    },
    follow      (userId:number) {return instance.post  (`follow/${userId} `)},
    unfollow    (userId:number) {return instance.delete(`follow/${userId} `)},
    getProfile  (userId:number) {return instance.get   (`profile/` + userId)}, //console.warn('Obsolete method. Please profileAPI object')
};

//  Profile
export const profileAPI = {
    getProfile  (userId:number) {return instance.get (`profile/` + userId)},
    getStatus   (userId:number) {return instance.get ('profile/status/' + userId)},
    updateStatus(status:string) {return instance.put ('profile/status', { status: status})},
    savePhoto(photoFile:any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put ('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
         })
    },
    saveProfile(profile:ProfileType){
        return instance.put ('profile', profile)
    }
};
//Подсказка
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}
export enum ResultCodesForCapctha {
    CaptchaIsRequired = 10
}
//
type MeResponseType = {
    data: {
        id:number
        email:string
        login:string
    }
    resultCode: ResultCodesEnum
}
type LoginResponseType = {
    data: {
        userId:number
    }
    resultCode: ResultCodesEnum | ResultCodesForCapctha
    messages: Array<string>
}
type LogoutResponseType = {
    resultCode: ResultCodesEnum 
    messages: Array<string>
    date: any
}
//  auth - авторизация
export const authAPI = {
    me(){return instance.get<MeResponseType>(`auth/me`).then(res => res.data)},
    login(email:string, password:string, rememberMe = false, captcha = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe,captcha })
            .then(res => res.data)
    },
    logout() {return instance.delete<LogoutResponseType>(`auth/login`)
            .then(res => res.data)
    },
};

type securityAPIType = {
   url:string
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<securityAPIType>(`security/get-captcha-url`)
    }
}



import { instance } from "./api";

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

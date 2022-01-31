import { instance, ResponseType, ResultCodesEnum, ResultCodeForCapcthaEnum } from "./api";

type MeResponseDataType = {
    id:number
    email:string
    login:string
}
type LoginResponseDataType = {
    userId:number
}
type LogoutResponseType = {
    date: any
}
//  auth - авторизация
export const authAPI = {
    me(){return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)},
    login(email:string, password:string, rememberMe = false, captcha = null) {
        return instance.post<ResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCapcthaEnum>>(`auth/login`, {email, password, rememberMe,captcha })
            .then(res => res.data)
    },
    logout() {return instance.delete<ResponseType<LogoutResponseType>>(`auth/login`)
            .then(res => res.data)
    },
};

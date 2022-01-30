import { instance } from "./api"

type securityAPIType = {
    url:string
 }
 export const securityAPI = {
     getCaptchaUrl() {
         return instance.get<securityAPIType>(`security/get-captcha-url`)
     }
 }
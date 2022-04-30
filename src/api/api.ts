import axios from "axios";
import { UserType } from "../Types/types";
// axios.create - создаёт экземпляр axios с настраиваемой конфигурацией.
export const instance = axios.create({
      withCredentials: true,
      baseURL: "https://social-network.samuraijs.com/api/1.0/",
    //   headers: {"API-KEY": "a0450db5-9e30-42e8-a82d-905ff590711b"},
    headers: {"API-KEY": "09df6509-62f8-480a-9c44-6768947e03b4"},
});

//Подсказка
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCapcthaEnum {
    CaptchaIsRequired = 10
}
//
export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
// jenerik
export type ResponseType<D = {}, RC = ResultCodesEnum> = {
    data:D
    messages: Array<string>
    resultCode: RC
}



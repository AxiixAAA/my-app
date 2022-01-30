import axios from "axios";
// axios.create - создаёт экземпляр axios с настраиваемой конфигурацией.
export const instance = axios.create({
      withCredentials: true,
      baseURL: "https://social-network.samuraijs.com/api/1.0/",
      headers: {"API-KEY": "a0450db5-9e30-42e8-a82d-905ff590711b"},
});

//Подсказка
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}
export enum ResultCodesForCapctha {
    CaptchaIsRequired = 10
}





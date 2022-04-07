import { DialogsType } from "../Types/types"
import { instance } from "./api"

export const dialogsAPI = {
    getFriendDialogs  (userId:number) {return instance.put <DialogsType>(`dialogs/` + userId).then(res => res.data)},
    // getFriendDialogs  (userId) {return instance.get (`dialogs/` + userId).then(res => res.data)},
    // updateStatus(status) {return instance.put ('profile/status', { status: status}).then(res => res.data)},

   
}
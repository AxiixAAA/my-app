import { GetItemsType, instance, ResponseType } from "./api";

//  Users
export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10, term:string = '', friend: null | boolean = null ) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
        .then(res => res.data)
    },

    async getFriends() {
        const response = await instance.get<TResponseUsers>(`users?count=100&friend=true`)
        return response.data
    },
    async searchUser(value: string) {
        const response = await instance.get<TResponseUsers>(`users?term=${value}`)
        return response.data
    },

    follow      (userId:number) {return instance.post  <ResponseType>(`follow/${userId}`).then(res => res.data)},
    unfollow    (userId:number) {return instance.delete(`follow/${userId} `).then(res => res.data) as Promise<ResponseType>},
};

type TResponseUsers = {
    items: TUser[]
    totalCount: number
    error: string
}
type TUser = {
    id: number
    name: string
    status: string
    photos:{
        small: string
        large: string
    }
    followed: boolean
}
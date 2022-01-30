import { instance } from "./api";

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
// Селектор это функция которая принимает state целиком и из этого стейта чего-то достаёт
import { TGlobalState } from "./reduxStore";

export const SelectorUsers = (state:TGlobalState) => {
    return state.usersPage.users
}
export const getPageSize = (state:TGlobalState) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state:TGlobalState) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state:TGlobalState) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state:TGlobalState) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state:TGlobalState) => {
    return state.usersPage.followingInProgress;
}
export const getUsersFilter = (state:TGlobalState) => {
    return state.usersPage.filter
}
export const getUsersFriend = (state:TGlobalState) => {
    return state.usersPage.filter.friend
}
export const getIsAuth = (state:TGlobalState) => {
    return state.auth.isAuth
}
export const getLogin = (state:TGlobalState) => {
    return state.auth.login
}



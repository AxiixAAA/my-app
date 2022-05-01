// Селектор это функция которая принимает state целиком и из этого стейта чего-то достаёт
import { AppStateType } from "./redux-store";

export const SelectorUsers = (state:AppStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state:AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state:AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state:AppStateType) => {
    return state.usersPage.followingInProgress;
}
export const getUsersFilter = (state:AppStateType) => {
    return state.usersPage.filter
}
export const getUsersFriend = (state:AppStateType) => {
    return state.usersPage.filter.friend
}
export const getIsAuth = (state:AppStateType) => {
    return state.auth.isAuth
}
export const getLogin = (state:AppStateType) => {
    return state.auth.login
}

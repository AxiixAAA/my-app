export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.CurrentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.IsFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}
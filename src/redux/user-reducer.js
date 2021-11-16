import { usersAPI } from "api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


// state
let initialState = {
  users: [], 
  pageSize: 5, // размер выдаваемых пользователей на 1 страницу
  totalUsersCount: 0, 
  currentPage: 1, // Устанавливаем страницу по умолчанию 1 
  isFetching: true, // preloader~
  followingInProgress: [] //Для дизейбла кнопки
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      }

    case SET_USERS: {
      return { ...state, users:action.users };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage}
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count}
    }
    
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching}
    }
// Обработка экшен креэйфтера
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return { 
        ...state, 
        followingInProgress: action.isFetching 
        ? [...state.followingInProgress, action.userId] 
        : state.followingInProgress.filter(id => id !== action.userId)
      }
    }

    default:
      return state;
  }
};

// Экшен креaтер чистая функция которая возвращает экшен
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, count:totalCount})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const getUsers  = (page,pageSize) => {
 return (dispatch) =>{
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));

  usersAPI.getUsers (page,pageSize).then(data => {
      dispatch(toggleIsFetching(false));

      // @ts-ignore
      dispatch(setUsers(data.items));
      // @ts-ignore
      dispatch(setTotalUsersCount(data.totalCount));
    });
  }
}

export const follow = (userId) => {
  return (dispatch) =>{
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId)
        .then(response => {
          // @ts-ignore
          if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId)); 
          }
          dispatch(toggleFollowingProgress(false, userId));
        });
   }
 }

 export const unfollow = (userId) => {
  return (dispatch) =>{
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId)
        .then(response => {
          // @ts-ignore
          if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId)); 
          }
          dispatch(toggleFollowingProgress(false, userId));
        });
   }
 }
export default userReducer;

// @ts-nocheck
import { usersAPI } from "api/api";

//Action type
const FOLLOW 						= "FOLLOW";
const UNFOLLOW						= "UNFOLLOW";
const SET_USERS 					= "SET_USERS";
const SET_CURRENT_PAGE 				= "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT 		= "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING 			= "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS  = "TOGGLE_IS_FOLLOWING_PROGRESS";

// state
let initialState = {
  users: [], 				   // Массив пользователей
  pageSize: 5, 		   		  // Размер выдаваемых пользователей на 1 страницу
  totalUsersCount: 0, 		 // Общее количество пользователей
  currentPage: 1, 	   	    // Устанавливаем страницу по умолчанию 1 
  isFetching: true,    	   // preloader~
  followingInProgress: [] // Для дизейбла кнопки
}

//Action приходит в store всего один, а дальше раскидывается по reducer, заходя в reduser если action не применялся в case, reducer возвращает не изменёную разметку 
//reduser это чистая функция которая принимает state,action и если нужно применяет этот action к state и возвращает новый state, либо возвращает не изменёный state если action не подошёл
//Следом после изменения всех reducer, возвращается новый актуальный state
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		//Подписаться
		case FOLLOW:
		return {
			...state,
			users: state.users.map((u) => {
			if (u.id === action.userId) {
				return { ...u, followed: true };
			}
			return u;
		})}

		//Отписаться
		case UNFOLLOW:
		return {
			...state,
			users: state.users.map((u) => {
			if (u.id === action.userId) {
				return { ...u, followed: false };
			}
			return u;
		})}

		//Инициализировать пользователей
		case SET_USERS: {return { ...state, users:action.users }}

		//установить текущую страницу
		case SET_CURRENT_PAGE: {return { ...state, currentPage: action.currentPage}}

		//установить общее количество пользоватлей
		case SET_TOTAL_USERS_COUNT: {return { ...state, totalUsersCount: action.count}}

		//Показывает preloader~
		case TOGGLE_IS_FETCHING: {return { ...state, isFetching: action.isFetching}}

		// для дизейбла кнопки во вреям аодписки ~ отписки
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
		return { 
			...state, 
			followingInProgress: action.isFetching 
			? [...state.followingInProgress, action.userId] 
			: state.followingInProgress.filter(id => id !== action.userId)}
		}

		// В случае если не найдёт совпадений вернёт не изменёный state
		default:return state;
	}
};

//Экшены — это структуры, которые передают данные из приложения в store.
// Они являются единственными источниками информации для store. Мы отправляете их в стор, используя метод store.dispatch().

// Action creator чистая функция которая возвращает action
export const followSuccess 		=   (userId) 		=> ({ type: FOLLOW, userId })
export const unfollowSuccess    =   (userId) 		=> ({ type: UNFOLLOW, userId })
export const setUsers 			=   (users) 		=> ({ type: SET_USERS, users })
export const setCurrentPage     =   (currentPage)   => ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount =   (totalCount)    => ({ type: SET_TOTAL_USERS_COUNT, count:totalCount})
export const toggleIsFetching   =   (isFetching)    => ({ type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

// Thank - функция которая делает ассинхронную операцию и которая делает дисптчи 
// Получить пользователей
export const getUsers  = (page,pageSize) => {
	return (dispatch) =>{
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(page));

		usersAPI.getUsers (page,pageSize).then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		});
	}
}

// Подписаться
export const follow = (userId) => {
    return (dispatch) =>{
		dispatch(toggleFollowingProgress(true, userId));
		usersAPI.follow(userId)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(followSuccess(userId)); 
			}
			dispatch(toggleFollowingProgress(false, userId));
		});
    }
 }

 // Отписаться
export const unfollow = (userId) => {
  return (dispatch) =>{
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId)
        .then(response => {
          if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId)); 
          }
          dispatch(toggleFollowingProgress(false, userId));
        });
	}
}

export default userReducer;

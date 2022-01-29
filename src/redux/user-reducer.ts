import { ThunkAction } from 'redux-thunk';
import { Dispatch } from "redux";
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../commponents/utils/object-helpers";
import { UserType } from "../Types/types";
import { AppStateType } from "./redux-store";

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
  users: [] as Array<UserType>, // Массив пользователей
  pageSize: 40, 		   	   // Размер выдаваемых пользователей на 1 страницу
  totalUsersCount: 0, 		  // Общее количество пользователей
  currentPage: 1, 	   	     // Устанавливаем страницу по умолчанию 1 
  isFetching: true,    	    // preloader~
  followingInProgress: [] as Array<number> // Для дизейбла кнопки // arrai of user ids
}

type InitialState = typeof initialState
//Action приходит в store всего один, а дальше раскидывается по reducer, заходя в reduser если action не применялся в case, reducer возвращает не изменёную разметку 
//reduser это чистая функция которая принимает state,action и если нужно применяет этот action к state и возвращает новый state, либо возвращает не изменёный state если action не подошёл
//Следом после изменения всех reducer, возвращается новый актуальный state
const userReducer = (state = initialState, action:ActionsType):InitialState => {
	switch (action.type) {

		//Подписаться
		case FOLLOW:
		return {
			...state,
			users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
		}
		//Отписаться
		case UNFOLLOW:
		return {
			...state,
			users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
		}

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

// Action который ждёт наш Reducer
type ActionsType = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType |
        SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType|
        ToggleFollowingProgressActionType

//Экшены — это структуры, которые передают данные из приложения в store.
// Они являются единственными источниками информации для store. Мы отправляете их в стор, используя метод store.dispatch().

// Action creator чистая функция которая возвращает action
type FollowSuccessActionType ={
    type: typeof FOLLOW
    userId:number
}
export const followSuccess 		=   (userId:number):FollowSuccessActionType 		=> ({ type: FOLLOW, userId })
type UnfollowSuccessActionType ={
    type: typeof UNFOLLOW
    userId:number
}
export const unfollowSuccess    =   (userId:number):UnfollowSuccessActionType 		=> ({ type: UNFOLLOW, userId })
type SetUsersActionType ={
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers 			=   (users:Array<UserType>):SetUsersActionType => ({ type: SET_USERS, users })
type SetCurrentPageActionType ={
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage     =   (currentPage:number):SetCurrentPageActionType    => ({ type: SET_CURRENT_PAGE, currentPage})
type SetTotalUsersCountActionType ={
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setTotalUsersCount =   (totalCount:number):SetTotalUsersCountActionType     => ({ type: SET_TOTAL_USERS_COUNT, count:totalCount})
type ToggleIsFetchingActionType ={
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching   =   (isFetching:boolean):ToggleIsFetchingActionType    => ({ type: TOGGLE_IS_FETCHING, isFetching})
type ToggleFollowingProgressActionType ={
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId:number
}
export const toggleFollowingProgress = (isFetching:boolean, userId:number):ToggleFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

// Thank - функция которая делает ассинхронную операцию и которая делает дисптчи 
// Получить пользователей
//ThunkAction<void, RootState, unknown, AnyAction>
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
// ThunkAction<void, RootState, unknown, AnyAction>
export const getUsers  = (page:number,pageSize:number, ):ThunkType => { // Thank Creater 
	return async (dispatch, getState: () => AppStateType) =>{               // Thank - благодаря замыканиям в Thank Creater,
		// dispatch(toggleIsFetching(true));     // благодаря переданным параметрам в Thank Creater,
		dispatch(setCurrentPage(page));       // Thank - работает как-то иначе

		let data = await usersAPI.getUsers (page,pageSize);
		dispatch(toggleIsFetching(false));
         //@ts-ignore
		dispatch(setUsers(data.items));
         //@ts-ignore
		dispatch(setTotalUsersCount(data.totalCount));
	}
}

// Общая функция для подписки и отписки 
const followUnfollowFlow = async (dispatch:DispatchType, userId:number, apiMethod:any, actionCreater: (userId: number) => FollowSuccessActionType | UnfollowSuccessActionType) => {
    dispatch(toggleFollowingProgress(true, userId));
        let response = await apiMethod(userId)
        if (response.data.resultCode === 0) {
            dispatch(actionCreater(userId)); 
        }
        dispatch(toggleFollowingProgress(false, userId));
}

// Подписаться
export const follow = (userId:number):ThunkType => {
    return async (dispatch) =>{
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
 }

 // Отписаться
export const unfollow = (userId:number):ThunkType => {
  return async (dispatch) =>{
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
	}
}

export default userReducer;

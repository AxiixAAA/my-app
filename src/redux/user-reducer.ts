import { Dispatch } from "redux";
import { updateObjectInArray } from "../commponents/utils/object-helpers";
import { UserType } from "../Types/types";
import { AppStateType, BaseThunkType, InferActionsTypes } from "./redux-store";
import { usersAPI } from '../api/users-api';

// state
let initialState = {
    users: [] as Array<UserType>, // Массив пользователей
    pageSize: 40, 		   	   // Размер выдаваемых пользователей на 1 страницу
    totalUsersCount: 0, 		  // Общее количество пользователей
    currentPage: 1, 	   	     // Устанавливаем страницу по умолчанию 1 
    isFetching: true,    	    // preloader~
    followingInProgress: [] as Array<number>, // Для дизейбла кнопки // arrai of user ids
    filter: {
        term : ''
    }    
}

//Action приходит в store всего один, а дальше раскидывается по reducer, заходя в reduser если action не применялся в case, reducer возвращает не изменёную разметку 
//reduser это чистая функция которая принимает state,action и если нужно применяет этот action к state и возвращает новый state, либо возвращает не изменёный state если action не подошёл
//Следом после изменения всех reducer, возвращается новый актуальный state
const userReducer = (state = initialState, action:ActionsType):InitialState => {
	switch (action.type) {

		//Подписаться
		case 'SN/USERS/FOLLOW':
		return {
			...state,
			users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
		}
		//Отписаться
		case 'SN/USERS/UNFOLLOW':
		return {
			...state,
			users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
		}

		//Инициализировать пользователей
		case 'SN/USERS/SET_USERS': {return { ...state, users:action.users }}

		//установить текущую страницу
		case 'SN/USERS/SET_CURRENT_PAGE': {return { ...state, currentPage: action.currentPage}}
		
        // Фильтр
        case 'SN/USERS/SET_FILTER': {return { ...state, filter: action.payload }}

		//установить общее количество пользоватлей
		case 'SN/USERS/SET_TOTAL_USERS_COUNT': {return { ...state, totalUsersCount: action.count}}

		//Показывает preloader~
		case 'SN/USERS/TOGGLE_IS_FETCHING': {return { ...state, isFetching: action.isFetching}}

		// для дизейбла кнопки во вреям аодписки ~ отписки
		case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
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

// Actions
export const actions = {
    followSuccess      :     (userId:number)		 => ({ type: 'SN/USERS/FOLLOW', userId } as const),
    unfollowSuccess    :     (userId:number)		 => ({ type: 'SN/USERS/UNFOLLOW', userId } as const),
    setUsers 		   :     (users:Array<UserType>) => ({ type: 'SN/USERS/SET_USERS', users } as const),
    setCurrentPage     :     (currentPage:number)    => ({ type: 'SN/USERS/SET_CURRENT_PAGE', currentPage} as const),
    setFilter          :     (term:string)           => ({ type: 'SN/USERS/SET_FILTER', payload:{term}} as const),
    setTotalUsersCount :     (totalCount:number)     => ({ type: 'SN/USERS/SET_TOTAL_USERS_COUNT', count:totalCount} as const),
    toggleIsFetching   :     (isFetching:boolean)    => ({ type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching:boolean, userId:number)=> ({ type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const)
}
// Thank - функция которая делает ассинхронную операцию и которая делает дисптчи 
// Получить пользователей
// ThunkAction<void, RootState, unknown, AnyAction>
// getUsers === requestUsers
export const getUsers  = (page:number,pageSize:number, term: string):ThunkType => { // Thank Creater 
	return async (dispatch, getState: () => AppStateType) =>{               // Thank - благодаря замыканиям в Thank Creater,
		dispatch(actions.toggleIsFetching(true));     // благодаря переданным параметрам в Thank Creater,
		dispatch(actions.setCurrentPage(page));       // Thank - работает как-то иначе
		dispatch(actions.setFilter(term));       // Thank - работает как-то иначе

		let data = await usersAPI.getUsers (page,pageSize,term);
		dispatch(actions.toggleIsFetching(false));
		dispatch(actions.setUsers(data.items));
		dispatch(actions.setTotalUsersCount(data.totalCount));
	}
}

// Общая функция для подписки и отписки 
const followUnfollowFlow = async (dispatch:DispatchType, userId:number, apiMethod:any, actionCreater: (userId: number) => ActionsType) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
        let response = await apiMethod(userId)
        if (response.data.resultCode === 0) {
            dispatch(actionCreater(userId)); 
        }
        dispatch(actions.toggleFollowingProgress(false, userId));
}

// Подписаться
export const follow = (userId:number):ThunkType => {
    return async (dispatch) =>{
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
    }
 }

 // Отписаться
export const unfollow = (userId:number):ThunkType => {
  return async (dispatch) =>{
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
	}
}

export default userReducer

type InitialState = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsType = InferActionsTypes<typeof actions>
type DispatchType = Dispatch<ActionsType>
type ThunkType = BaseThunkType<ActionsType>

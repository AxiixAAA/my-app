import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./user-reducer";
import thunkMiddleware from "redux-thunk"
import appReducer from "./app-reducer";

//combineReducers. Это метод, который позволяет вместо того, чтобы создавать один огромный reducer для всего состояния приложения сразу, разбивать его на отдельные модули.
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar:     sidebarReducer,
    usersPage:   userReducer,
    auth:        authReducer,
    form:        formReducer,
    app:         appReducer
});

// createStore - Создает Redux стор которое хранит полное дерево состояния приложения. Оно должно быть единственным стором в приложении.
//
// Параметры:
//   1.reducer (Function): Функция редюсера которая возвращает дерево состояния, принимая текущее состояние и экшен к обработке.
//   2.applyMiddleware(thunkMiddleware) - дял поддержки store асинхронных экшенов 
// Возвращает:
//   (Store): объект, который содержит полное состояние приложения.
//   Единственный способ изменить его состояние — путем отправки экшенов. 
//   Можем также подписаться на изменения его состояния, чтобы обновить пользовательский интерфейс.
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;
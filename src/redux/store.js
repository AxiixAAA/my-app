import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Привет мир!", likesCount: 12 },
        { id: 2, message: "Здраствуй сынок!", likesCount: 11 },
        { id: 1, message: "Привет Pa!", likesCount: 15 },
        { id: 2, message: "Salam!", likesCount: 111 },
      ],
      newPostText: "React",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Slava" },
      ],
      messages: [
        { id: 1, message: "1" },
        { id: 2, message: "2" },
        { id: 3, message: "3" },
        { id: 4, message: "4" },
        { id: 5, message: "5" },
      ],
      newMessageBody: ""

    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("sss");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

  this._state.profilePage = profileReducer(this._state.profilePage,action);
  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
  this._state.sidebar     = sidebarReducer(this._state.sidebar,action);
  
  this._callSubscriber(this._state);
  },
};


export default store;

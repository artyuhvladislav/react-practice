import dialogReducer from "./dialogReducer";
import friendReducer from "./friendReducer";
import profileReducer from "./profileReducer";

const store = {
  _state: {
    profilePage: {
      postsData: [
        { message: "my first post", likesCount: 1 },
        { message: "my second post", likesCount: 10 },
        { message: "my third post", likesCount: 19999 },
      ],
      newPostText: "blabla",
    },
    dialogsPage: {
      messagesData: [
        { message: "hi1" },
        { message: "hi2" },
        { message: "h53" },
      ],
      newMessage: "",
      dialogsData: [
        { name: "Name1", id: 1 },
        { name: "Name2", id: 2 },
        { name: "Name3", id: 3 },
        { name: "Namedede4", id: 4 },
      ],
    },
    friendsPage: {
      friendsData: [
        { name: "name1", id: 1 },
        { name: "name2", id: 2 },
        { name: "name3", id: 3 },
      ],
      newFriend: "",
    },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
    this._state.friendsPage = friendReducer(this._state.friendsPage, action)
    this._callSubscriber(this._state);
  },
};


export { store };
window.store = store;

const ADD_POST = "ADD-POST";
const UPDATE_TEXT = "UPDATE-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";
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
    if (action.type === "ADD-POST") {
      const newPost = {
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-POST") {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      const newMessage = {
        message: this._state.dialogsPage.newMessage,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessage = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-MESSAGE") {
      this._state.dialogsPage.newMessage = action.text;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostsAC = () => {
  return {type: ADD_POST}
}
export const updateNewPostTextAC = (text) => {
  return {type: UPDATE_TEXT, text: text}
}
export const addMessageAC = () => {
  return {type: ADD_MESSAGE}
}
export const updateNewMessageTextAC = (text) => {
  return {type: UPDATE_MESSAGE, text: text}
}
// const addPosts = () => {
//   const newMessage = state.profilePage.newPostText
//   const newPost = { message: newMessage, likesCount: 0 };
//   state.profilePage.postsData.push(newPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree(state)
// };

// const updateNewPostText = (text) => {
//   state.profilePage.newPostText = text;
//   rerenderEntireTree(state)
// }

export { store };
window.store = store;

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const UPDATE_POST = "UPDATE-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";
const ADD_FRIEND = "ADD-FRIEND";
const UPDATE_FRIEND = "UPDATE-FRIEND";
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
    if (action.type === ADD_POST) {
      const newPost = {
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === DELETE_POST) {
      const postsArray = [...this._state.profilePage.postsData];
      postsArray.splice(action.id, 1);
      this._state.profilePage.postsData = postsArray;
      this._callSubscriber(this._state);

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_POST) {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      const newMessage = {
        message: this._state.dialogsPage.newMessage,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessage = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_MESSAGE) {
      this._state.dialogsPage.newMessage = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_FRIEND) {
      const newFriend = {
        name: this._state.friendsPage.newFriend,
        id: 1,
      };
      this._state.friendsPage.friendsData.push(newFriend);
      this._state.friendsPage.newFriend = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_FRIEND) {
      this._state.friendsPage.newFriend = action.name;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostsAC = () => {
  return { type: ADD_POST };
};
export const deletePostsAC = (id) => {
  return { type: DELETE_POST, id: id };
};
export const updateNewPostTextAC = (text) => {
  return { type: UPDATE_POST, text: text };
};
export const addMessageAC = () => {
  return { type: ADD_MESSAGE };
};
export const updateNewMessageTextAC = (text) => {
  return { type: UPDATE_MESSAGE, text: text };
};
export const addFriendAC = () => {
  return { type: ADD_FRIEND };
};
export const updateNewFriendNameAC = (name) => {
  return { type: UPDATE_FRIEND, name: name };
};
export { store };
window.store = store;

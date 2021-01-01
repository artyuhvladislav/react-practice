const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const dialogReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        message: state.newMessage,
      };
      state.messagesData.push(newMessage);
      state.newMessage = "";
      return state;

    case UPDATE_MESSAGE:
      state.newMessage = action.text;
      return state;

    default:
      return state;
  }
};
export const addMessageAC = () => {
  return { type: ADD_MESSAGE };
};
export const updateNewMessageTextAC = (text) => {
  return { type: UPDATE_MESSAGE, text: text };
};
export default dialogReducer;

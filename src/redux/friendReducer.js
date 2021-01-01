const ADD_FRIEND = "ADD-FRIEND";
const DELETE_FRIEND = "DELETE-FRIEND";
const UPDATE_FRIEND = "UPDATE-FRIEND";

const friendReducer = (state, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      const newFriend = {
        name: state.newFriend,
        id: 1,
      };
      state.friendsData.push(newFriend);
      state.newFriend = "";
      return state;

    case DELETE_FRIEND:
      const arr = [...state.friendsData];
      arr.splice(action.id, 1);
      state.friendsData = arr;
      return state;

    case UPDATE_FRIEND:
      state.newFriend = action.name;
      return state

    default:
      return state;
  }
};
export const addFriendAC = () => {
  return { type: ADD_FRIEND };
};
export const deleteFriendAC = (id) => {
  return { type: DELETE_FRIEND, id: id };
};
export const updateNewFriendNameAC = (name) => {
  return { type: UPDATE_FRIEND, name: name };
};
export default friendReducer;

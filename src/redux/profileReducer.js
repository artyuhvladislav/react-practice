const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const UPDATE_POST = "UPDATE-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        message: state.newPostText,
        likesCount: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;

    case DELETE_POST:
      const postsArray = [...state.postsData];
      postsArray.splice(action.id, 1);
      state.postsData = postsArray;
      return state;

    case UPDATE_POST:
      state.newPostText = action.text;
      return state;

    default:
      return state;
  }
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
export default profileReducer;

import React, { createRef } from "react";
import { addPostsAC, updateNewPostTextAC } from "../../../redux/state";
import Post from "./Post/Post";

const MyPost = (props) => {
  const postMessage = createRef();

  const addPost = () => {
    props.dispatch(addPostsAC());
  };

  const updateNewPostText = () => {
    props.dispatch(updateNewPostTextAC(postMessage.current.value));
  };

  const postsElements = props.state.postsData.map((item, id) => {
    return <Post dispatch={props.dispatch} message={item.message} likesCount={item.likesCount} id={id}/>;
  });

  return (
    <div>
      <h2>My posts</h2>
      <textarea
        ref={postMessage}
        onChange={updateNewPostText}
        cols="10"
        rows="10"
        value={props.state.newPostText}
      ></textarea>
      <button onClick={addPost}>Add</button>
      {postsElements}
    </div>
  );
};
export default MyPost;

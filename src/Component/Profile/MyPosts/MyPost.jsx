import React from "react";
import Post from "./Post/Post";
const MyPost = (props) => {
  const postsElements = props.postsData.map((item) => {
    return <Post message={item.message} likesCount={item.likesCount} />;
  });
  return (
    <div>
      <h2>My posts</h2>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Add</button>
      {postsElements}
    </div>
  );
};
export default MyPost;

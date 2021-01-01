import React from "react";
import { deletePostsAC } from "../../../../redux/profileReducer";
import s from "./Post.module.css";
const Post = (props) => {
  const deletePost = () => {
    alert(props.id)
    props.dispatch(deletePostsAC(props.id))
  }
  return (
    <div className={s.container}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU"
        alt="avatar"
      />
      <p className="text">
        {props.message}
      </p>
      <p>{props.id}</p>
      <span>Likes {props.likesCount}</span>
      <button onClick={deletePost}>delete</button>
    </div>
  );
};
export default Post;

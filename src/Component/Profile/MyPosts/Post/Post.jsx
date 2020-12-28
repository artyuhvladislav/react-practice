import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.container}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU"
        alt="avatar"
      />
      <p className="text">
        {props.message}
      </p>
      <span>Likes {props.likesCount}</span>
    </div>
  );
};
export default Post;

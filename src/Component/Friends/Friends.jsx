import React from "react";
import FriendItem from "./FriendItem/FriendItem";
import s from './Friends.module.css'
const Friends = (props) => {
  const friendsElements = props.state.friendsData.map(item => {
    return <FriendItem name={item.name} id={item.id}/>
  });
  
  return (
    <div className={s.container}>{friendsElements}</div>
  );
};
export default Friends;

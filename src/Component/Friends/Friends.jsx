import React, { createRef } from "react";
import { addFriendAC, updateNewFriendNameAC } from "../../redux/friendReducer";
import FriendItem from "./FriendItem/FriendItem";
import s from "./Friends.module.css";
const Friends = (props) => {
  const addFriend = () => {
    props.dispatch(addFriendAC());
  };
  const updateNewFriendName = () => {
    props.dispatch(updateNewFriendNameAC(friend.current.value));
  };
  const friend = createRef();
  const friendsElements = props.state.friendsData.map((item, index) => {
    return (
      <FriendItem dispatch={props.dispatch} name={item.name} id={index} />
    );
  });

  return (
    <div className={s.container}>
      {friendsElements}
      <textarea
        onChange={updateNewFriendName}
        value={props.state.newFriend}
        ref={friend}
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={addFriend}>add friend</button>
    </div>
  );
};
export default Friends;

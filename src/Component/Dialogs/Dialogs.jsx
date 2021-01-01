import React, { createRef } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialogReducer";

const Dialogs = (props) => {
  const message = createRef();
  const addMessage = () => {
    props.dispatch(addMessageAC());
  };
  const updateNewMessageText = () => {
    props.dispatch(updateNewMessageTextAC(message.current.value));
  };
  const dialogsElements = props.state.dialogsData.map((item) => {
    return <DialogItem name={item.name} id={item.id} />;
  });
  const messagesElements = props.state.messagesData.map((item) => {
    return <MessageItem message={item.message} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messagesItems}>{messagesElements}</div>
      <div className={s.textArea}>
        <textarea
          onChange={updateNewMessageText}
          value={props.state.newMessage}
          ref={message}
          cols="10"
          rows="5"
        ></textarea>
        <button onClick={addMessage}>add message</button>
      </div>
    </div>
  );
};
export default Dialogs;

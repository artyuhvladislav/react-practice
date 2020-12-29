import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
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
    </div>
  );
};
export default Dialogs;

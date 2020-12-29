import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { dialogsData, messagesData } from "../../index";

const Dialogs = (props) => {
  const dialogsElements = dialogsData.map((item) => {
    return <DialogItem name={item.name} id={item.id} />;
  });
  const messagesElements = messagesData.map((item) => {
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

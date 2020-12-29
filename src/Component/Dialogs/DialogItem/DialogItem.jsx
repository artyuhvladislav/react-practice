import React from "react";
import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={s.dialogsItem + " " + s.active}>
      <NavLink to={path} className={s.dialog} activeClassName={s.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};


export default DialogItem;

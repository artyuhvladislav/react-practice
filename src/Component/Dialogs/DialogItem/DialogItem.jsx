import React from 'react';
import s from './DialogItem.module.css';
const DialogItem = (props) => {
    return (
        <div className={s.dialog}>{props.name}</div>
    )
}

export default DialogItem
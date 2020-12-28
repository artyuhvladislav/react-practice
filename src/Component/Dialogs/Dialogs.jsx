import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Vladislav" id="1"/>
                <DialogItem name="Petr" id="2"/>
                <DialogItem name="Ivan" id="3"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi how r u"/>
                <Message message="Ok thx"/>
            </div>
        </div>

    )
}
export default Dialogs
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogsData.map( d => {
        return <DialogItem name={d.name} key = {d.id} id={d.id} />
    });


    const messagesElements = props.state.messagesData.map( m => {
        return <Messages message={m.message}   key = {m.id} />
    });
    

    const addMessage = () => {
        props.addMessage();
    }

    const onChangeMessageText = (e) => {
        const text = e.target.value;
        props.updateNewMessageText(text);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea  className={s.text} placeholder='write a message...' value={props.newMessageText} onChange={onChangeMessageText}></textarea>
            <button className={s.btn} onClick={addMessage}>new  message</button>
        </div>
    )
}
export default Dialogs
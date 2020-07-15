import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
// import { addMessageActionCreator,  updateNewMessageTextActionCreator } from '../../redux/messageReducer';

const Dialogs = (props) => {
    debugger;
    const dialogsElements = props.state.dialogsData.map( el => {
        return <DialogItem name={el.name} id={el.id} />
    });


    const messagesElements = props.state.messagesData.map( el => {
        return <Messages message={el.message} />
    });
    

    const addMessage = () => {
        props.addMessage();
    }

    const onChangeMessageText = (e) => {
        const text = e.target.value;
        props.onChangeMessageText(text);
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
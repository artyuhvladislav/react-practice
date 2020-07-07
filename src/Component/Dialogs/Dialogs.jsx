import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import { addMessageActionCreator,  updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {
  
    const dialogsElements = props.state.dialogsData.map( el => {
        return <DialogItem name={el.name} id={el.id} />
    });


    const messagesElements = props.state.messagesData.map( el => {
        return <Messages message={el.message} />
    });
    

    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }


    const newMessageElement = React.createRef();


    const onChangeMessageText = () => {
        const text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }


    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea  className={s.text} placeholder='write a message...' value={props.state.newMessageText} ref={newMessageElement} onChange={onChangeMessageText}></textarea>
            <button className={s.btn} onClick={addMessage}>new  message</button>
        </div>
    )
}
export default Dialogs
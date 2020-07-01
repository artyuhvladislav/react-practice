import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogsData.map( el => {
        return <DialogItem name={el.name} id={el.id} />
    });
    const messagesElements = props.state.messagesData.map( el => {
        return <Messages message={el.message} />
    });
    const addMessage = () => {
        const text = newMessageElement.current.value;
        props.addMessage(text);
    }
    const newMessageElement = React.createRef();
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>new  message</button>
        </div>
    )
}
export default Dialogs
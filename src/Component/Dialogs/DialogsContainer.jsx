import React from 'react';
import store from '../../redux/redux-store';
import Dialogs from './Dialogs';
// import Messages from './Messages/Messages';
import { addMessageActionCreator,  updateNewMessageTextActionCreator } from '../../redux/messageReducer';

const DialogsContainer = (props) => {  
    const state = store.getState();
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const onChangeMessageText = (text) => {
        
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }


    return (
        <Dialogs  addMessage={addMessage} onChangeMessageText={onChangeMessageText}
         newMessageText={state.messagesPage.newMessageText} state={state.messagesPage}
         />
    )
}
export default DialogsContainer
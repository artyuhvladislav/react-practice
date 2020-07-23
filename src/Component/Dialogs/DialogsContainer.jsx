import React from 'react';
import store from '../../redux/redux-store';
import Dialogs from './Dialogs';
import { addMessageActionCreator,  updateNewMessageTextActionCreator } from '../../redux/messageReducer';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {  
    


//     return (
//         <storeContext.Consumer> 
//             {
//                 (store) => {
//                     const state = store.getState();
//                     const addMessage = () => {
//                         store.dispatch(addMessageActionCreator());
//                     }

//                     const onChangeMessageText = (text) => {
                        
//                         store.dispatch(updateNewMessageTextActionCreator(text));
//                     }
//                     return (
//                         <Dialogs  addMessage={addMessage}
//                                 onChangeMessageText={onChangeMessageText}
//                                 newMessageText={state.messagesPage.newMessageText}
//                                 state={state.messagesPage}
//                         />
//                     )
//                 }
//             }
//         </storeContext.Consumer>
            
//     )
// }
const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        state: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onChangeMessageText: (text) => {
                        
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer
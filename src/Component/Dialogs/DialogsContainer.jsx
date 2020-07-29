import Dialogs from './Dialogs';
import { addMessage,  updateNewMessageText } from '../../redux/messageReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        state: state.messagesPage
    }
}

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs)
export default DialogsContainer
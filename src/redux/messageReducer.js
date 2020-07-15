const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-MESSAGE-TEXT';
const initialState = {
    messagesData: [
        {id:1, message:'hi'},
        {id:2, message:'hello'}
    ],
    newMessageText: '',
    dialogsData: [
        {id:1, name:'Vlad'},
        {id:2, name:'Valera'},
        {id:3, name:'Ivan'}
    ]
}
const messageReducer  = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE: 
            const newMessage = {id:1, message:state.newMessageText};
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        
        case UPDATE_NEW_MESSAGE: 
            state.newMessageText = action.newText;
            return state;
        
        default: 
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text});
export default messageReducer
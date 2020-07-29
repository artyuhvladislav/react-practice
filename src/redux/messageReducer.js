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
            const newMessage = state.newMessageText; 
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id:1, message: newMessage}]     
            }
       
        case UPDATE_NEW_MESSAGE: 
            return {
                ...state,
                newMessageText: action.newText
            }
        
        default: 
            return state;
    }
}

export const addMessage = () => ({type: ADD_MESSAGE});
export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text});
export default messageReducer
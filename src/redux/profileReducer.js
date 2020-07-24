const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-POST-TEXT';

const initialState = {
    postsData: [
        {id:1, message:'Hi how are you', likesCount: 12},
        {id:2, message:'this is my first post', likesCount: 2}           
    ],
    newPostText: ''
}
const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            const newPost = state.newPostText
           
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, {
                    id:1,
                    message: newPost,
                    likesCount: 0
                }]
            }
        
        case UPDATE_NEW_POST: 
            
            return {
                ...state,
                newPostText: action.newText
            }
        
        default: 
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text});
export default profileReducer
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-POST-TEXT';

const initialState = {
    postsData: [
        {id:1, message:'Hi how are you', likesCount: 12},
        {id:2, message:'this is my first post', likesCount: 2}           
    ],
    newPostText: '',
    newsData: [
        {id:1, title:'first news'},
        {id:2, title:'fefefe news'},
        {id:3, title:'fewfref news'},
        {id:4, title:'erfrefre news'},
        {id:5, title:'first news'}
    ]
}
const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            const newPost = {
                id:1,
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText='';
            return state;
        
        case UPDATE_NEW_POST: 
            state.newPostText = action.newText;
            return state;
        
        default: 
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text});
export default profileReducer
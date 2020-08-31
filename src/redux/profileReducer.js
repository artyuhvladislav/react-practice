const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const initialState = {
    postsData: [
        {id:1, message:'Hi how are you', likesCount: 12},
        {id:2, message:'this is my first post', likesCount: 2}           
    ],
    newPostText: '',
    profile: null
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
        case SET_USERS_PROFILE: 
            
            return {
                ...state,
                profile: action.profile
            }
        default: 
            return state;
    }
}
export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST, newText: text});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile: profile});
export default profileReducer
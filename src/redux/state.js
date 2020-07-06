const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-POST-TEXT';
const store = {
    _state : {
        messagesPage: {
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
        },
        profilePage: {
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
        },
        sideBar: {
            users: [
                {id:1, name:'Vlad'},
                {id:2, name:'Valera'},
                {id:3, name:'Ivan'}
            ]
        }
    },
    _renderEntireTree() {},
    
    getState() {
        return this._state
    },
    subscribe (observer) {
        this._renderEntireTree = observer
    },

    // addPost() {
    //     const newPost = {
    //         id:1,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.postsData.push(newPost);
    //     this._state.profilePage.newPostText='';
    //     this._renderEntireTree(this._state);
    // },
    addMessage() {
        const newMessage = {id:1, message:this._state.messagesPage.newMessageText};
    
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._renderEntireTree(this._state);
    },

    // updateNewPostText (newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._renderEntireTree(this._state);
    // },
    updateNewMessageText (newText) {
        this._state.messagesPage.newMessageText = newText;
        this._renderEntireTree(this._state);
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            const newPost = {
                id:1,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText='';
            this._renderEntireTree(this._state);
        } 
        else if(action.type === 'UPDATE-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._renderEntireTree(this._state);
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text});

window.store = store;
export default store
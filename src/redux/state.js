import {renderEntireTree} from '../render';
const state = {
    messagesPage: {
            messagesData: [
                {id:1, message:'hi'},
                {id:2, message:'hello'}
            ],
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
    
}

export const addPost = () => {
    const newPost = {
        id:1,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText='';
    renderEntireTree(state);
}

export const addMessage = (message) => {
    const newMessage = {id:1, message:message};
    state.messagesPage.messagesData.push(newMessage);
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}
window.state = state;
export default state
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sideBarReducer from "./sideBarReducer";



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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._renderEntireTree(this._state);
    }
}



window.store = store;
export default store
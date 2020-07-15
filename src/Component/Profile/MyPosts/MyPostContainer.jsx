import React from 'react';
import MyPost from './MyPost';
import store from '../../../redux/redux-store';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

const MyPostContainer = (props) => {
    const state = store.getState();
    const addPost = () => {
        props.store.dispatch( addPostActionCreator() );
    }
  
    const onChangePostText = (text) => {
        props.store.dispatch( updateNewPostTextActionCreator(text) );
    }
    
    return (
        <MyPost addPost = {addPost} onChangePostText = {onChangePostText } 
        newPostText = {state.profilePage.newPostText} postsData = {state.profilePage.postsData}/>
    )
}
export default MyPostContainer
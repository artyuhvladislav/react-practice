import React from 'react';
import MyPost from './MyPost';
import store from '../../../redux/redux-store';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';


// const MyPostContainer = (props) => {
   
    
    
//     return (
//         <storeContext.Consumer> 
//             {
//             (store) => {
//                 const state = store.getState();
//                 const addPost = () => {
//                     store.dispatch( addPostActionCreator() );
//                 }
              
//                 const onChangePostText = (text) => {
//                     store.dispatch( updateNewPostTextActionCreator(text) );
//                 }

//                 return (
//                     <MyPost addPost = {addPost}
//                             onChangePostText = {onChangePostText } 
//                             newPostText = {state.profilePage.newPostText}
//                             postsData = {state.profilePage.postsData}/>
//                 )
//             }
        
//         }       
//         </storeContext.Consumer>
//     )
// }
const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch( addPostActionCreator() );
        },
        onChangePostText: (text) => {
            store.dispatch( updateNewPostTextActionCreator(text) );
        }
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer
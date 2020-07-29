import MyPost from './MyPost';
import store from '../../../redux/redux-store';
import { addPost, updateNewPostText } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
}

const MyPostContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPost)
export default MyPostContainer
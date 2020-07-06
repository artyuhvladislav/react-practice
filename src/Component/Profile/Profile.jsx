import React from 'react';
import MyPost from './MyPosts/MyPost';
import News from './News/News';
import s from './Profile.module.css'
const Profile = (props) => {
    return (
        <div className={s.wrapper}>
            <News newsData={props.state.newsData}/>
            <MyPost 
                postsData={props.state.postsData}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText} />
        </div>
    )
}
export default Profile
import React from 'react';
import MyPost from './MyPosts/MyPost';
import News from './News/News';
import s from './Profile.module.css'
const Profile = (props) => {
    return (
        <div className={s.wrapper}>
            <News newsData={props.state.newsData}/>
            <MyPost postsData={props.state.postsData} addPost={props.addPost}/>
        </div>
    )
}
export default Profile
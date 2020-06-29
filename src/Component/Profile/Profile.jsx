import React from 'react';
import MyPost from './MyPosts/MyPost';
import News from './News/News';
import s from './Profile.module.css'
const Profile = () => {
    return (
        <div className={s.wrapper}>
            <News />
            <MyPost />
        </div>
    )
}
export default Profile
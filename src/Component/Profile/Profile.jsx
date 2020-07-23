import React from 'react';
import News from './News/News';
import s from './Profile.module.css'
import MyPostContainer from './MyPosts/MyPostContainer';
import NewsContainer from './News/NewsContainer';
const Profile = (props) => {
    
    return (
        <div className={s.wrapper}>
            <NewsContainer />
            <MyPostContainer  />
        </div>
    )
}
export default Profile
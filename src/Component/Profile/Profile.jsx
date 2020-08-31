import React from 'react';
import s from './Profile.module.css'
import MyPostContainer from './MyPosts/MyPostContainer';
import NewsContainer from './News/NewsContainer';
import ProfileInfo from './ProfileInfo';
const Profile = (props) => {
    debugger
    return (
        <div className={s.wrapper}>
            <NewsContainer />
            <ProfileInfo profile = {props.profile} />
            <MyPostContainer />
        </div>
    )
}
export default Profile
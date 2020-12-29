import React from 'react';
import MyPost from './MyPosts/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {postsData} from '../../index'
const Profile = () => {
    return (
        <div className="profile">
            <ProfileInfo />
            <MyPost postsData={postsData}/>
        </div>
    )
}
export default Profile
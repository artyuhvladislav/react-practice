import React from 'react';
import MyPost from './MyPosts/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo />
            <MyPost postsData={props.state.postsData}/>
        </div>
    )
}
export default Profile
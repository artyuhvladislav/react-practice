import React from 'react';
import MyPost from './MyPosts/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo />
            <MyPost state={props.state} dispatch={props.dispatch} />
        </div>
    )
}
export default Profile
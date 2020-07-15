import React from 'react';
import News from './News/News';
import s from './Profile.module.css'
import MyPostContainer from './MyPosts/MyPostContainer';
const Profile = (props) => {
    
    return (
        <div className={s.wrapper}>
            <News newsData={props.state.newsData}/>
            <MyPostContainer store={props.store} />
        </div>
    )
}
export default Profile
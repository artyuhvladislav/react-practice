import React from 'react';
import s from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {

    const friendsElements = props.friends.users.map( el => {
        return <FriendsItem user={el.name} id={el.id}/>
    });
    return (
        <div>
            <h2>Friends</h2>
            <div className={s.container}>
               {friendsElements}
            </div>
        </div>
    )
}
export default Friends
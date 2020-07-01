import React from 'react';
import s from './FriendsItem.module.css';

const FriendsItem = (props) => {
    return (
        <div className={s.item}>
            <img src="" alt="" className={s.img}/>
            <span>{props.user}</span>
        </div>
    )
}
export default FriendsItem
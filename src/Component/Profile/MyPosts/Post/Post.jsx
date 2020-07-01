import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
    return (
        <div className={s.container}>
            <div className={s.item}>
                <div className={s.user}></div>
                <p className={s.message}>{props.message}</p>
            </div>
            
            <div className={s.item}>
                <div className={s.icon}>
                    <span>{props.likesCount}</span>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
            </div>
            
        </div>
    )
}
export default Post
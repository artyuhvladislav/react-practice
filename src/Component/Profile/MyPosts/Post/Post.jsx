import React from 'react';

const Post = (props) => {
    return (
        <div className="container">
            <div className="user"></div>
            <p className="message">{props.message}</p>
            <div className="icon">
                <span>{props.likesCount}</span>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
            </div>
        </div>
    )
}
export default Post
import React from 'react';
import Post from './Post/Post';

const MyPost = () => {
    const postData = [
        {id:1, message:'Hi how are you', likesCount: 12},
        {id:2, message:'this is my first post', likesCount: 2}           
    ];
    return (
        <div>
            <div className="container">
                <img src="" alt="avatar" />
                <textarea className="text"></textarea>
                <button>New post</button>
                <div className="icon">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
            </div>
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
        </div>
    )
}
export default MyPost
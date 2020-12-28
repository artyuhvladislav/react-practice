import React from 'react';
import Post from './Post/Post'
const MyPost = () => {
    return (
        <div>
            <h2>My posts</h2>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add</button>
            <Post message='My first post' likesCount='1' />
            <Post message='My second post' likesCount='10' />
            <Post />
        </div>
    )
}
export default MyPost
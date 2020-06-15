import React from 'react';
import Post from './Post/Post'
const MyPost = () => {
    return (
        <div>
            <div className="container">
                <img src="" alt="avatar" />
                <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Obcaecati magnam veritatis corrupti non illum hic ad molestias
                    nostrum, ea expedita, modi eaque enim eos quia assumenda illo?
                    Sit, asperiores rem?
                </p>
                <div className="icon">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
            </div>
            <Post />
            <Post />
            <Post />
        </div>
    )
}
export default MyPost
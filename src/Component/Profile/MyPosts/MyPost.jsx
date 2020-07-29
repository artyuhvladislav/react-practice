import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';


const MyPost = (props) => {
    
    const postElements = props.postsData.map( el => {
        return <Post message={el.message} likesCount={el.likesCount}/>
    });


    const addPost = () => {
        props.addPost()
    }
  
    const onChangePostText = (e) => {
        const text = e.target.value;
        props.updateNewPostText(text)
    }
    
    return (
        <div>
            <div className={s.container}>
                <div className={s.item}>
                    <img src="" alt="avatar" className={ s.img }/>
                    <textarea className={s.text} placeholder="New post" value={props.newPostText} onChange={onChangePostText}/>
                </div>
                <div className={s.item}>
                    <button className={s.btn} onClick={addPost}>create post</button>
                    <div className={s.icon}>
                        <img src="" alt="icon"/>
                        <img src="" alt="icon"/>
                        <img src="" alt="icon"/>
                    </div>
                </div>
            </div>
            {postElements}
        </div>
    )
}
export default MyPost
import React from 'react';
import s from './Messages.module.css';
const Messages = (props) => {
    return (
        <div>
            <div className={`${s.message} ${s.ownMessage}`}>{props.message}</div>
        </div>
        
    )
}

export default Messages
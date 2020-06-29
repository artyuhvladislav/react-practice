import React from 'react';
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <ul className={s.nav}>
            <li><a href="/profile" className={s.link}>Home</a></li>
            <li><a href="#3" className={s.link}>News</a></li>
            <li><a href="/dialogs" className={s.link}>Messenger</a></li>
            <li><a href="#3" className={s.link}>Friends</a></li>
            <li><a href="#3" className={s.link}>Music</a></li>
        </ul>
    )
}
export default Navigation
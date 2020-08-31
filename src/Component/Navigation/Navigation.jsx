import React from 'react';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul className={s.nav}>
            <li><NavLink to="/profile" className={s.link} activeClassName={s.active}>Home</NavLink></li>
            <li><NavLink to="/news" className={s.link}  activeClassName={s.active}>News</NavLink></li>
            <li><NavLink to="/dialogs" className={s.link} activeClassName={s.active}>Messenger</NavLink></li>
            <li><NavLink to="/users" className={s.link} activeClassName={s.active}>Friends</NavLink></li>
            <li><NavLink to="/music" className={s.link} activeClassName={s.active}>Music</NavLink></li>
        </ul>
    )
}
export default Navigation
import React from 'react';
import myImg from '../img/logo.png';
import s from './Logo.module.css';
const Logo = () => {
    return (
        <div>
            <a href="#3" className={s.logo}>
                <img src={myImg} alt="socialNetwork" className={s.img} />
                <h1 className={s.title}>SocialNetwork</h1>
            </a>
        </div>
    )
}
export default Logo
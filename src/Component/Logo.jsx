import React from 'react';
import myImg from '../img/logo.png';
const Logo = () => {
    return (
        <div className="logo">
            <a href="#3" className="logo-link">
                <img src={myImg} alt="socialNetwork" className="logo-img" />
                <h1 className="logo-title">SocialNetwork</h1>
            </a>
        </div>
    )
}
export default Logo
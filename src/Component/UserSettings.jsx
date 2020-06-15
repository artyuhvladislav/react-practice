import React from 'react';
import s from './UserSettings.module.css';
const UserSettings = () => {
    return (
        <div className={s.user}>
            <a className={s.link} href="#3">
                <img src="./img/question-circle-solid.svg" alt="user-question" className={s.icon} />
            </a>
            <a className={s.link} href="#3">
                <img src="./img/envelope-solid.svg" alt="user-messages" className={s.icon} />
            </a>
            <a className={s.link} href="#3">
                <img src="./img/bell-solid.svg" alt="user-notification" className={s.icon} />
            </a>
            <a className={s.link} href="#3">
                <img src="./img/Greg-Emerson-edit-2.jpg" alt="user-avatar" className={s.icon} />
            </a>
        </div>
    )
}
export default UserSettings
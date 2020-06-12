import React from 'react';
const UserSettings = () => {
    return (
        <div className="user-settings">
            <a className="user-question" href="#3">
                <img src="./img/question-circle-solid.svg" alt="user-question" className="user-settings-icon user-question-icon" />
            </a>
            <a className="user-messages" href="#3">
                <img src="./img/envelope-solid.svg" alt="user-messages" className="user-settings-icon user-messages-icon" />
            </a>
            <a className="user-notification" href="#3">
                <img src="./img/bell-solid.svg" alt="user-notification" className="user-settings-icon user-notification-icon" />
            </a>
            <a className="user-avatar" href="#3">
                <img src="./img/Greg-Emerson-edit-2.jpg" alt="user-avatar" className="user-avatar-icon" />
            </a>
        </div>
    )
}
export default UserSettings
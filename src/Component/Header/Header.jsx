import React from 'react';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import UserSettings from './UserSettings/UserSettings';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <Logo />
            <Search />
            <UserSettings />
        </header>
    )
}
export default Header
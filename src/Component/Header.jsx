import React from 'react';
import Logo from './Logo';
import Search from './Search';
import UserSettings from './UserSettings';
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
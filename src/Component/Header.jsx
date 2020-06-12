import React from 'react';
import Logo from './Logo';
import Search from './Search';
import UserSettings from './UserSettings';

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Search />
            <UserSettings />
        </header>
    )
}
export default Header
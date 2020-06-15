import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Profile from './Component/Profile/Profile';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Profile />
        </div>
    )
}
export default App
import React from 'react';
import './App.css';
import Dialogs from './Component/Dialogs/Dialogs';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Profile from './Component/Profile/Profile';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            {/* <Profile /> */}
            <Dialogs />
        </div>
    )
}
export default App
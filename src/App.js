import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './Component/Dialogs/Dialogs';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Profile from './Component/Profile/Profile';

const App = () => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/profile' component={Profile}/>
            </div>
        </div>
        </BrowserRouter>
    )
}
export default App
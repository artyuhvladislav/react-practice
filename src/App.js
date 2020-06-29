import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Profile from './Component/Profile/Profile';
import Navigation from './Component/Navigation/Navigation';
import Dialogs from './Component/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navigation />
                <div className="app-wrapper-content">
                    <Route path='/profile' component={ Profile } />
                    <Route path='/dialogs' component={ Dialogs } />
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App
import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Profile from './Component/Profile/Profile';
import Navigation from './Component/Navigation/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import Friends from './Component/Friends/Friends';
import DialogsContainer from './Component/Dialogs/DialogsContainer';

const App = (props) => {
    
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navigation />
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ 
                        () => < Profile />} />
                    <Route path='/dialogs' render={
                        () => < DialogsContainer /> } />
                </div>
                {/* <Friends friends={props.state.sideBar} /> */}
            </div>
        </BrowserRouter>
    )
}
export default App
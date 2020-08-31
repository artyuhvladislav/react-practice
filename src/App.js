import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Navigation from './Component/Navigation/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './Component/Dialogs/DialogsContainer';
import UsersContainer from './Component/Users/UsersContainer';
import FriendsContainer from './Component/Friends/FriendsContainer';
import MusicContainer from './Component/Music/MusicContainer';
import ProfileContainer from './Component/Profile/ProfileContainer';
import NewsContainer from './Component/Profile/News/NewsContainer';

const App = (props) => {
    
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navigation />
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={() => < ProfileContainer /> }/>
                    <Route path='/news' render={() => <NewsContainer />}/>
                    <Route path='/dialogs' render={() => < DialogsContainer /> }/>
                    <Route path='/users' render={() => < UsersContainer /> }/>
                    <Route path='/music' render={() => < MusicContainer /> }/>
                </div>
                <FriendsContainer  />
            </div>
        </BrowserRouter>
    )
}
export default App
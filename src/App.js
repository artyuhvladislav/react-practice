import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Profile from './Component/Profile/Profile';
import Navigation from './Component/Navigation/Navigation';
import Dialogs from './Component/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Friends from './Component/Friends/Friends';

const App = (props) => {
    
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navigation />
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ 
                        () => < Profile state={props.state.profilePage} dispatch={props.dispatch}/>} />
                    <Route path='/dialogs' render={
                        () => < Dialogs 
                                    state={props.state.messagesPage} dispatch={props.dispatch}/>
                    } />
                </div>
                <Friends friends={props.state.sideBar}/>
            </div>
        </BrowserRouter>
    )
}
export default App
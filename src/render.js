import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './redux/state';
import {addMessage} from './redux/state';
import {updateNewPostText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';


export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}



serviceWorker.unregister();

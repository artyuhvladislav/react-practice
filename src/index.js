import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {addPost} from './redux/state';
import {addMessage} from './redux/state';
import {updateNewPostText, updateNewMessageText} from './redux/state';

import { BrowserRouter } from 'react-router-dom';
import {subscribe} from './redux/state';

const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                    addPost={addPost}
                    addMessage={addMessage}
                    updateNewPostText={updateNewPostText}
                    updateNewMessageText = {updateNewMessageText} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(state);
subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

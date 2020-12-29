import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogsData = [
  { name: "Name1", id: 1 },
  { name: "Name2", id: 2 },
  { name: "Name3", id: 3 },
  { name: "Namedede4", id: 4 },
];

const messagesData = [
  { message: "hi1" },
  { message: "hi2" },
  { message: "h53" },
];

const postsData = [
  { message: "my first post", likesCount: 1 },
  { message: "my second post", likesCount: 10 },
  { message: "my third post", likesCount: 100 }
];

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export {dialogsData, messagesData, postsData}
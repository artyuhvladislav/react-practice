import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';
import newsReducer from './newsReducer';
import musicReducer from './musicReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    newsPage: newsReducer,
    messagesPage: messageReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    musicPage: musicReducer
});
const store = createStore(reducers)
window.store = store
export default store;

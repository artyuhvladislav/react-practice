import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sideBarReducer from './sideBarReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sideBar: sideBarReducer
});
const store = createStore(reducers)
export default store;
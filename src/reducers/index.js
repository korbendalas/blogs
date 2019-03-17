import {combineReducers} from 'redux';
import PostsReducer from './PostsReducer';
import UserReducer from './userReducer';

export default combineReducers({
    postsR:PostsReducer,
    users: UserReducer
});
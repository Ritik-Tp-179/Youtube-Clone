import {combineReducers} from 'redux';
import authReducer from './auth';
import chanelReducers from "./chanel"
import currentUserReducer from './currentUser';
import videoReducer from './Video.js';
import likedVideoReducer from './likedVideo';
import watchLaterReducer from './watchLater';
import HistoryReducer from './history';
import commentReducer from './comments';

export default combineReducers({
    authReducer,
    currentUserReducer,
    chanelReducers,
    videoReducer,
    likedVideoReducer,
    watchLaterReducer,
    HistoryReducer,
    commentReducer
})


import {combineReducers} from 'redux';
import userDataReducer from './userData.reducer'
import userAuthReducer from './userAuth.reducer'
import networkReducer from './network.reducer';

export default combineReducers({
    userData: userDataReducer,
    auth: userAuthReducer,
    network: networkReducer,
})
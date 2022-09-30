import {
    combineReducers,
    legacy_createStore as createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { registerNewUserReducer, loginReducer } from './reducers/userReducer';

const finalReducer = combineReducers({
    //All Reducers here
    registerNewUserReducer: registerNewUserReducer,
    loginReducer: loginReducer
});

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const initialState = {
    loginReducer: {
        currentUser: currentUser
    }
}

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(finalReducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;
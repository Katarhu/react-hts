import {Action, applyMiddleware, combineReducers, createStore} from 'redux';

import {composeWithDevTools} from "redux-devtools-extension";

import thunk, {ThunkMiddleware} from 'redux-thunk';

import {userReducer} from './user/user.reducer';
import {coursesReducer} from './courses/courses.reducer';
import {authorsReducer} from './authors/authors.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    courses: coursesReducer,
    authors: authorsReducer
});


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export type RootState = ReturnType <typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;


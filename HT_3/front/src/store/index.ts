import {applyMiddleware, combineReducers, createStore} from 'redux';

import {composeWithDevTools} from "redux-devtools-extension";

import createSagaMiddleware from 'redux-saga';

import rootWatcher from "./sagas";

import {userReducer} from './user/user.reducer';
import {coursesReducer} from './courses/courses.reducer';
import {authorsReducer} from './authors/authors.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    courses: coursesReducer,
    authors: authorsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType <typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;


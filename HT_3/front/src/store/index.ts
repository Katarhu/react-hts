import {applyMiddleware, combineReducers, createStore} from 'redux';
import {userReducer} from './user/user.reducer';
import createSagaMiddleware from 'redux-saga'
import rootWatcher from "./sagas";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    user: userReducer
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


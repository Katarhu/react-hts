import {combineReducers, createStore} from 'redux';
import {userReducer} from './user/user.reducer';

const rootReducer = combineReducers({
    user: userReducer
});

const store = createStore(
    rootReducer
);

export type RootState = ReturnType <typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;


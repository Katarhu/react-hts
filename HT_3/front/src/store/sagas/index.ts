import {all} from 'redux-saga/effects';

import {userWatcher} from "./user.saga";
import {authWatcher} from "./auth.saga";

function * rootWatcher () {
    yield all([userWatcher(), authWatcher()])
}

export default rootWatcher;

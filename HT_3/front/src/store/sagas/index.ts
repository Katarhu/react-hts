import {all} from 'redux-saga/effects';

import {userWatcher} from "./user.saga";
import {authWatcher} from "./auth.saga";
import {coursesWatcher} from './courses.saga';
import {authorsWatcher} from './authors.saga';

function * rootWatcher () {
    yield all([
        userWatcher(),
        authWatcher(),
        coursesWatcher(),
        authorsWatcher(),
    ])
}

export default rootWatcher;

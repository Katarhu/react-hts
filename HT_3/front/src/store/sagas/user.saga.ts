import {put, takeEvery, call} from 'redux-saga/effects'

import {getUser} from '../../services/user.service';
import {IGetUserResponse} from '../../models/auth/getUser';

import {getUserFailure, getUserSuccess} from '../user/user.action.creators';
import {UserActions} from "../user/user.types";

function* userWorker() {
    try {
        const response: IGetUserResponse = yield call(getUser);

        yield put(getUserSuccess(response));
    }
    catch(err) {
        yield put(getUserFailure());
    }
}

export function* userWatcher() {
    yield takeEvery(UserActions.GET_USER, userWorker);
}

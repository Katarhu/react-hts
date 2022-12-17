import {call, put, takeEvery} from "redux-saga/effects";

import {loginUser, logOut, registerUser} from "../../services/auth.service";

import {
    loginUserFailure,
    loginUserSuccess, logOutDone,
    registerUserFailure,
    registerUserSuccess
} from '../user/user.action.creators';

import { AuthActions, LOGIN_USER, REGISTER_USER } from "../user/user.types";

import {ILoginResponse} from '../../models/auth/login';

function* loginWorker(action: LOGIN_USER) {
    try {

        const response: ILoginResponse = yield call(loginUser, action.payload);

        yield put(loginUserSuccess(response));

    } catch (error: any) {
        yield put(loginUserFailure(error as string));
    }
}

function* registerWorker(action: REGISTER_USER) {
    try {
        yield call(registerUser, action.payload);

        yield put(registerUserSuccess());

    } catch (err: any) {
        yield put(registerUserFailure(err as string));
    }
}

function* logOutWorker() {
    yield call(logOut);
    yield put(logOutDone());
}

export function* authWatcher() {
    yield takeEvery(AuthActions.LOGIN_USER, loginWorker);
    yield takeEvery(AuthActions.REGISTER_USER, registerWorker);
    yield takeEvery(AuthActions.LOGOUT, logOutWorker);
}

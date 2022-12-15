import {call, put, takeEvery} from "redux-saga/effects";

import {loginUser, logOut, registerUser} from "../../services/auth.service";
import {
    loginUserFailure,
    loginUserSuccess,
    registerUserFailure,
    registerUserSuccess
} from "../user/user.action.creators";

import {
    AuthActions,
    LOGIN_USER,
    REGISTER_USER,
} from "../user/user.types";

import {IUser} from "../../models/user";

function* loginWorker(action: LOGIN_USER) {
    try {

        const user: IUser = yield call(loginUser, action.payload);

        yield put(loginUserSuccess(user));

    } catch (error: any) {

        yield put(loginUserFailure(error));
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
}

export function* authWatcher() {
    yield takeEvery(AuthActions.LOGIN_USER, loginWorker);
    yield takeEvery(AuthActions.REGISTER_USER, registerWorker);
    yield takeEvery(AuthActions.LOGOUT, logOutWorker);
}

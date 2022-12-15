import {put, takeEvery, call} from 'redux-saga/effects'
import {UserActions} from "../user/user.types";

function* userWorker() {

}

export function* userWatcher() {
    yield takeEvery(UserActions.GET_USER, userWorker);
}

import {call, put, takeEvery} from 'redux-saga/effects';

import {AuthorsActions} from '../authors/authors.types';

import {getAuthorsFailure, getAuthorsSuccess} from '../authors/authors.action.creators';

import {getAuthors} from '../../services/authors.service';

import {IAuthor} from '../../models/author';


function* getAuthorsWorker() {
    try {
        const authors: IAuthor[] = yield call(getAuthors);

        yield put(getAuthorsSuccess(authors));

    } catch (error) {
        yield put(getAuthorsFailure(error as string));
    }
}

export function* authorsWatcher() {
    yield takeEvery(AuthorsActions.GET_AUTHORS, getAuthorsWorker);
}
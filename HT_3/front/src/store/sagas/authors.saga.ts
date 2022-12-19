import {call, put, takeEvery} from 'redux-saga/effects';

import {AuthorsActions, CREATE_AUTHOR} from '../authors/authors.types';

import {
    addAuthorFailure,
    addAuthorSuccess,
    getAuthorsFailure,
    getAuthorsSuccess
} from '../authors/authors.action.creators';

import {addAuthor, getAuthors} from '../../services/authors.service';

import {IAuthor} from '../../models/author';


function* getAuthorsWorker() {
    try {
        const authors: IAuthor[] = yield call(getAuthors);

        yield put(getAuthorsSuccess(authors));

    } catch (error) {
        yield put(getAuthorsFailure(error as string));
    }
}

function* addAuthorWorker(action: CREATE_AUTHOR) {
    try {
        const author: IAuthor = yield call(addAuthor, action.payload);

        yield put(addAuthorSuccess(author));
    } catch(error: any) {
        yield put(addAuthorFailure(error as string));
    }
}

export function* authorsWatcher() {
    yield takeEvery(AuthorsActions.GET_AUTHORS, getAuthorsWorker);
    yield takeEvery(AuthorsActions.CREATE_AUTHOR, addAuthorWorker);
}

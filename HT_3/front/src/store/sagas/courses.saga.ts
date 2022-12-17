import {call, put, takeEvery} from 'redux-saga/effects';

import {getCoursesFailure, getCoursesSuccess} from '../courses/courses.action.creators';

import {getCourses} from '../../services/courses.service';

import {CourseActions} from '../courses/courses.types';

import {ICourse} from '../../models/course';


function* getCoursesWorker() {
    try {
        const courses: ICourse[] = yield call(getCourses);

        yield put(getCoursesSuccess(courses));

    } catch (error) {
        yield put(getCoursesFailure(error as string));
    }
}

export function* coursesWatcher() {
    yield takeEvery(CourseActions.GET_COURSES, getCoursesWorker);
}
import {call, put, takeEvery} from 'redux-saga/effects';

import {
    addCourseFailure,
    addCourseSuccess,
    deleteCourseFailure,
    deleteCourseSuccess,
    getCoursesFailure,
    getCoursesSuccess
} from '../courses/courses.action.creators';

import {addCourse, deleteCourse, getCourses} from '../../services/courses.service';

import {CourseActions, CREATE_COURSE, DELETE_COURSE} from '../courses/courses.types';

import {ICourse} from '../../models/course';


function* getCoursesWorker() {
    try {
        const courses: ICourse[] = yield call(getCourses);

        yield put(getCoursesSuccess(courses));

    } catch (error) {
        yield put(getCoursesFailure(error as string));
    }
}

function* addCoursesWorker(action: CREATE_COURSE) {
    try {
        const course: ICourse = yield call(addCourse, action.payload);

        yield put(addCourseSuccess(course));
    } catch (error: any) {
        yield put(addCourseFailure(error as string));
    }
}

function* deleteCourseWorker(action: DELETE_COURSE) {
    try {
        const id: string = yield call(deleteCourse, action.payload);

        yield put(deleteCourseSuccess(id));
    } catch(error: any) {
        yield put(deleteCourseFailure(error as string));
    }
}

export function* coursesWatcher() {
    yield takeEvery(CourseActions.GET_COURSES, getCoursesWorker);
    yield takeEvery(CourseActions.CREATE_COURSE, addCoursesWorker);
    yield takeEvery(CourseActions.DELETE_COURSE, deleteCourseWorker);
}
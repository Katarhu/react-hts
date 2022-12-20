import {Dispatch} from "redux";

import {
    addCourseAction,
    addCourseFailureAction,
    addCourseSuccessAction,
    deleteCourseAction,
    deleteCourseFailureAction,
    deleteCourseSuccessAction,
    getCoursesAction,
    getCoursesFailureAction,
    getCoursesSuccessAction
} from './courses.action.creators';

import {addCourse, deleteCourse, getCourses} from '../../services/courses.service';

import {ICourse} from '../../models/course';

import {AppThunk} from "../index";


export const getCoursesThunkAction = (): AppThunk<void> => {
    return async (dispatch: Dispatch) => {
        dispatch(getCoursesAction());

        try {
            const courses = await getCourses();

            dispatch(getCoursesSuccessAction(courses));
        } catch (error) {
            dispatch(getCoursesFailureAction(error as string));
        }
    }
}

export const addCourseThunkAction = (course: ICourse): AppThunk<void> => {
    return async (dispatch: Dispatch) => {
        dispatch(addCourseAction());

        try {
            await addCourse(course);

            dispatch(addCourseSuccessAction(course));
        } catch (error) {
            dispatch(addCourseFailureAction(error as string));

        }
    }
}

export const deleteCourseThunkAction = (id: string): AppThunk<void> => {
    return async (dispatch: Dispatch) => {
        dispatch(deleteCourseAction());

        try {
            await deleteCourse(id);

            dispatch(deleteCourseSuccessAction(id));
        } catch (error) {
            dispatch(deleteCourseFailureAction(error as string));
        }
    }
}

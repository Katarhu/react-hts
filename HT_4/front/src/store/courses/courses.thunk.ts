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

export const getCoursesThunkAction = (): any => {
    return async (dispatch: any) => {
        dispatch(getCoursesAction());

        try {
            const courses = await getCourses();

            dispatch(getCoursesSuccessAction(courses));
        } catch (error) {
            dispatch(getCoursesFailureAction(error as string));
        }
    }
}

export const addCourseThunkAction = (course: ICourse): any => {
    return async (dispatch: any) => {
        dispatch(addCourseAction());

        try {
            await addCourse(course);

            dispatch(addCourseSuccessAction(course));
        } catch (error) {
            dispatch(addCourseFailureAction(error as string));

        }
    }
}

export const deleteCourseThunkAction = (id: string): any => {
    return async (dispatch: any) => {
        dispatch(deleteCourseAction());

        try {
            await deleteCourse(id);

            dispatch(deleteCourseSuccessAction(id));
        } catch (error) {
            dispatch(deleteCourseFailureAction(error as string));
        }
    }
}
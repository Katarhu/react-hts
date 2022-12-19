import {CourseActions} from './courses.types';
import {ICourse} from '../../models/course';


export const getCoursesAction = () => ({ type: CourseActions.GET_COURSES });
export const getCoursesSuccessAction = (payload: ICourse[]) => ({ type: CourseActions.GET_COURSES_SUCCESS, payload });
export const getCoursesFailureAction = (payload: string) => ({ type: CourseActions.GET_COURSES_FAILURE, payload });

export const addCourseAction = () => ({ type: CourseActions.CREATE_COURSE});
export const addCourseSuccessAction = (payload: ICourse) => ({ type: CourseActions.CREATE_COURSE_SUCCESS, payload });
export const addCourseFailureAction = (payload: string) => ({ type: CourseActions.CREATE_COURSE_FAILURE, payload });

export const deleteCourseAction = () => ({ type: CourseActions.DELETE_COURSE });
export const deleteCourseSuccessAction = (payload: string) => ({ type: CourseActions.DELETE_COURSE_SUCCESS, payload});
export const deleteCourseFailureAction = (payload: string) => ({ type: CourseActions.DELETE_COURSE_FAILURE, payload });

export const changeCourseFilterAction = (payload: string) => ({ type: CourseActions.FILTER_CHANGE, payload });

export const clearCoursesErrorAction = () => ({ type: CourseActions.CLEAR_ERROR });
export const clearCourseStateAction = () => ({ type: CourseActions.CLEAR_STATE });
import {CourseActions} from './courses.types';
import {ICourse} from '../../models/course';


export const getCourses = () => ({ type: CourseActions.GET_COURSES });
export const getCoursesSuccess = (payload: ICourse[]) => ({ type: CourseActions.GET_COURSES_SUCCESS, payload });
export const getCoursesFailure = (payload: string) => ({ type: CourseActions.GET_COURSES_FAILURE, payload });

export const addCourse = (payload: ICourse) => ({ type: CourseActions.CREATE_COURSE, payload});
export const addCourseSuccess = (payload: ICourse) => ({ type: CourseActions.CREATE_COURSE_SUCCESS, payload });
export const addCourseFailure = (payload: string) => ({ type: CourseActions.CREATE_COURSE_FAILURE, payload });

export const deleteCourse = (payload: string) => ({ type: CourseActions.DELETE_COURSE, payload });
export const deleteCourseSuccess = (payload: string) => ({ type: CourseActions.DELETE_COURSE_SUCCESS, payload});
export const deleteCourseFailure = (payload: string) => ({ type: CourseActions.DELETE_COURSE_FAILURE, payload });

export const changeCourseFilter = (payload: string) => ({ type: CourseActions.FILTER_CHANGE, payload });

export const clearCoursesError = () => ({ type: CourseActions.CLEAR_ERROR });
export const clearCourseState = () => ({ type: CourseActions.CLEAR_STATE });
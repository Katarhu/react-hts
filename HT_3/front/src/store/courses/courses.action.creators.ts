import {CourseActions} from './courses.types';
import {ICourse} from '../../models/course';


export const getCourses = () => ({ type: CourseActions.GET_COURSES });
export const getCoursesSuccess = (payload: ICourse[]) => ({ type: CourseActions.GET_COURSES_SUCCESS, payload });
export const getCoursesFailure = (payload: string) => ({ type: CourseActions.GET_COURSES_FAILURE, payload });

export const clearCourseState = () => ({ type: CourseActions.CLEAR_STATE });
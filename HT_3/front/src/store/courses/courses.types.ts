import {ICourse} from '../../models/course';

export interface ICoursesInitialState {
    loading: CoursesLoadingType;
    courses: ICourse[];
    error: string;
}

export enum CoursesLoadingType {
    NONE="NONE",
    LOADING_COURSES="LOADING_COURSES",
    COURSE_ACTION="COURSE_ACTION"
}


export enum CourseActions {
    GET_COURSES="GET_COURSES",
    GET_COURSES_SUCCESS="GET_COURSES_SUCCESS",
    GET_COURSES_FAILURE="GET_COURSES_FAILURE",

    CLEAR_STATE="CLEAR_STATE"
}

// **********************
// **********************

export interface GET_COURSES {
    type: CourseActions.GET_COURSES;
}

export interface GET_COURSES_FAILURE {
    type: CourseActions.GET_COURSES_FAILURE;
    payload: string;
}

export interface GET_COURSES_SUCCESS {
    type: CourseActions.GET_COURSES_SUCCESS;
    payload: ICourse[];
}

// **********************
// **********************

export interface CLEAR_STATE {
    type: CourseActions.CLEAR_STATE
}

// **********************
// **********************


export type CourseAction = GET_COURSES
                        | GET_COURSES_FAILURE
                        | GET_COURSES_SUCCESS
                        | CLEAR_STATE
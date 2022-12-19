import {ICourse} from '../../models/course';

export interface ICoursesInitialState {
    loading: CoursesLoadingType;
    courses: ICourse[];
    filteredCourses: ICourse[];
    filter: string;
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

    CREATE_COURSE="CREATE_COURSE",
    CREATE_COURSE_SUCCESS="CREATE_COURSE_SUCCESS",
    CREATE_COURSE_FAILURE="CREATE_COURSE_FAILURE",

    DELETE_COURSE="DELETE_COURSE",
    DELETE_COURSE_SUCCESS="DELETE_COURSE_SUCCESS",
    DELETE_COURSE_FAILURE="DELETE_COURSE_FAILURE",

    FILTER_CHANGE="FILTER_CHANGE",

    CLEAR_ERROR="CLEAR_ERROR",
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

export interface DELETE_COURSE {
    type: CourseActions.DELETE_COURSE,
    payload: string;
}

export interface DELETE_COURSE_SUCCESS {
    type: CourseActions.DELETE_COURSE_SUCCESS
    payload: string;
}

export interface DELETE_COURSE_FAILURE {
    type: CourseActions.DELETE_COURSE_FAILURE
    payload: string;
}

// **********************
// **********************

export interface CREATE_COURSE {
    type: CourseActions.CREATE_COURSE,
    payload: ICourse;
}

export interface CREATE_COURSE_SUCCESS {
    type: CourseActions.CREATE_COURSE_SUCCESS
    payload: ICourse;
}

export interface CREATE_COURSE_FAILURE {
    type: CourseActions.CREATE_COURSE_FAILURE
    payload: string;
}

// **********************
// **********************

export interface COURSES_FILTER_CHANGE {
    type: CourseActions.FILTER_CHANGE,
    payload: string;
}

// **********************
// **********************

export interface CLEAR_ERROR {
    type: CourseActions.CLEAR_ERROR;
}

export interface CLEAR_STATE {
    type: CourseActions.CLEAR_STATE;
}

// **********************
// **********************


export type CourseAction = GET_COURSES
                        | GET_COURSES_FAILURE
                        | GET_COURSES_SUCCESS
                        | CREATE_COURSE
                        | CREATE_COURSE_SUCCESS
                        | CREATE_COURSE_FAILURE
                        | DELETE_COURSE
                        | DELETE_COURSE_SUCCESS
                        | DELETE_COURSE_FAILURE
                        | CLEAR_ERROR
                        | CLEAR_STATE
                        | COURSES_FILTER_CHANGE
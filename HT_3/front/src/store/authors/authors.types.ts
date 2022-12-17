import {IAuthor} from '../../models/author';


export interface IAuthorsInitialState {
    loading: AuthorsLoadingType;
    authors: IAuthor[];
    error: string;
}

export enum AuthorsLoadingType {
    NONE="NONE",
    LOADING_AUTHORS="LOADING_COURSES",
    AUTHORS_ACTION="COURSE_ACTION"
}

export enum AuthorsActions {
    GET_AUTHORS="GET_AUTHORS",
    GET_AUTHORS_SUCCESS="GET_AUTHORS_SUCCESS",
    GET_AUTHORS_FAILURE="GET_AUTHORS_FAILURE",

    CLEAR_STATE="CLEAR_STATE",
}

// **********************
// **********************

export interface GET_AUTHORS {
    type: AuthorsActions.GET_AUTHORS
}

export interface GET_AUTHORS_SUCCESS {
    type: AuthorsActions.GET_AUTHORS_SUCCESS;
    payload: IAuthor[];
}

export interface GET_AUTHORS_FAILURE {
    type: AuthorsActions.GET_AUTHORS_FAILURE;
    payload: string;
}

// **********************
// **********************

export interface CLEAR_STATE {
    type: AuthorsActions.CLEAR_STATE;
}

// **********************
// **********************

export type AuthorsAction = GET_AUTHORS
                        | GET_AUTHORS_SUCCESS
                        | GET_AUTHORS_FAILURE
                        | CLEAR_STATE
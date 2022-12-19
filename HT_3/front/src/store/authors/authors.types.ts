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

    CREATE_AUTHOR="CREATE_AUTHOR",
    CREATE_AUTHOR_SUCCESS="CREATE_AUTHOR_SUCCESS",
    CREATE_AUTHOR_FAILURE="CREATE_AUTHOR_FAILURE",

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

export interface CREATE_AUTHOR {
    type: AuthorsActions.CREATE_AUTHOR;
    payload: IAuthor;
}

export interface CREATE_AUTHOR_SUCCESS {
    type: AuthorsActions.CREATE_AUTHOR_SUCCESS
    payload: IAuthor;
}

export interface CREATE_AUTHOR_FAILURE {
    type: AuthorsActions.CREATE_AUTHOR_FAILURE
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
                        | CREATE_AUTHOR
                        | CREATE_AUTHOR_SUCCESS
                        | CREATE_AUTHOR_FAILURE
                        | CLEAR_STATE
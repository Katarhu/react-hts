import {AuthorsActions} from './authors.types';
import {IAuthor} from '../../models/author';


export const getAuthors = () => ({ type: AuthorsActions.GET_AUTHORS });
export const getAuthorsSuccess = (payload: IAuthor[]) => ({ type: AuthorsActions.GET_AUTHORS_SUCCESS, payload });
export const getAuthorsFailure = (payload: string) => ({ type: AuthorsActions.GET_AUTHORS_FAILURE, payload });

export const addAuthor = (payload: IAuthor) => ({ type: AuthorsActions.CREATE_AUTHOR, payload });
export const addAuthorSuccess = (payload: IAuthor) => ({ type: AuthorsActions.CREATE_AUTHOR_SUCCESS, payload });
export const addAuthorFailure = (payload: string) => ({ type: AuthorsActions.CREATE_AUTHOR_FAILURE, payload });

export const clearAuthorState = () => ({ type: AuthorsActions.CLEAR_STATE });
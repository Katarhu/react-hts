import {AuthorsActions} from './authors.types';
import {IAuthor} from '../../models/author';


export const getAuthorsAction = () => ({ type: AuthorsActions.GET_AUTHORS });
export const getAuthorsSuccessAction = (payload: IAuthor[]) => ({ type: AuthorsActions.GET_AUTHORS_SUCCESS, payload });
export const getAuthorsFailureAction = (payload: string) => ({ type: AuthorsActions.GET_AUTHORS_FAILURE, payload });

export const addAuthorAction = () => ({ type: AuthorsActions.CREATE_AUTHOR });
export const addAuthorSuccessAction = (payload: IAuthor) => ({ type: AuthorsActions.CREATE_AUTHOR_SUCCESS, payload });
export const addAuthorFailureAction = (payload: string) => ({ type: AuthorsActions.CREATE_AUTHOR_FAILURE, payload });

export const clearAuthorStateAction = () => ({ type: AuthorsActions.CLEAR_STATE });
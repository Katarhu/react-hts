import {AuthorsActions} from './authors.types';
import {IAuthor} from '../../models/author';


export const getAuthors = () => ({ type: AuthorsActions.GET_AUTHORS });
export const getAuthorsSuccess = (payload: IAuthor[]) => ({ type: AuthorsActions.GET_AUTHORS_SUCCESS, payload });
export const getAuthorsFailure = (payload: string) => ({ type: AuthorsActions.GET_AUTHORS_FAILURE, payload });
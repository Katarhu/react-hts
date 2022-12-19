import {
    addAuthorAction, addAuthorFailureAction, addAuthorSuccessAction,
    getAuthorsAction,
    getAuthorsFailureAction,
    getAuthorsSuccessAction
} from './authors.action.creators';
import {addAuthor, getAuthors} from '../../services/authors.service';
import {IAuthor} from '../../models/author';

export const getAuthorsThunkAction = (): any => {
    return async (dispatch: any) => {
        dispatch(getAuthorsAction());

        try {
            const authors = await getAuthors();

            dispatch(getAuthorsSuccessAction(authors));
        } catch (error) {
            dispatch(getAuthorsFailureAction(error as string));

        }
    }
}

export const addAuthorThunkAction = (author: IAuthor): any => {
    return async (dispatch: any) => {
        dispatch(addAuthorAction());

        try {
            await addAuthor(author);

            dispatch(addAuthorSuccessAction(author));
        } catch (error) {
            dispatch(addAuthorFailureAction(error as string));

        }
    }
}
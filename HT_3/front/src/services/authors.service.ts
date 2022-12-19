import axios from '../utils/axios';

import {IAuthor, IGetAuthorsSuccess} from '../models/author';

export const getAuthors = async () => {
    try {
        const {data} = await axios.get<IGetAuthorsSuccess>('/authors/all');

        return data.result;

    } catch (error: any) {
        return error.response.data.result ?? 'Could not get authors';
    }
}

export const addAuthor = async (author: IAuthor) => {
    try {
        return author;
    } catch (error) {
        throw error;
    }
}
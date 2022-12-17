import axios from '../utils/axios';
import {IGetAuthorsSuccess} from '../models/author';


export const getAuthors = async () => {
    try {
        const {data} = await axios.get<IGetAuthorsSuccess>('/authors/all');

        return data.result;

    } catch (error: any) {
        return error.response.data.result ?? 'Could not get authors';
    }
}
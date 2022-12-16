import axios from '../utils/axios';
import {IGetUserResponse, IGetUserSuccess} from '../models/auth/getUser';

export const getUser = async () => {
    try {

        const { data } = await axios.get<IGetUserSuccess>('/users/me');

        const token: string = window.localStorage.getItem('token') ?? '';

        const response: IGetUserResponse = {
            user: data.result,
            token
        }

        return response;

    } catch (err) {
        throw err;
    }
}

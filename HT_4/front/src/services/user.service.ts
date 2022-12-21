import axios from '../utils/axios';

import {IGetUserResponse, IGetUserSuccess} from '../models/auth/getUser';
import sleep from "../utils/sleep";

export const getUser = async () => {
    try {

        const { data } = await axios.get<IGetUserSuccess>('/users/me');

        const token: string = window.localStorage.getItem('token') ?? '';

        await sleep(250);

        const response: IGetUserResponse = {
            user: data.result,
            token
        }

        return response;

    } catch (error: any) {
        throw error.repsonse.data.result ?? 'Cannot get user';
    }
}

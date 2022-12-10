import { IRegisterFailure, IRegisterSuccess, IRegisterCredentials } from '../models/auth/register'
import { ILoginCredentials, ILoginSuccess, ILoginFailure } from '../models/auth/login';
import { IGetUserFailure, IGetUserSuccess } from '../models/auth/getUser';
import { IDefaultAuthResponse } from '../models/auth/auth';

import {useHttp} from '../hooks/useHttp';

import {HttpTypes} from '../common/types/http.types';

export const useAuthService = () => {
    const {isLoading, error, clearError, request} = useHttp();

    const signIn = async (body: ILoginCredentials) => {
        const response: IDefaultAuthResponse = await request('login', HttpTypes.POST, body);

        if( !response.successful ) {
            return response as ILoginFailure;
        }

        return response as ILoginSuccess;
    }

    const signUp = async (body: IRegisterCredentials) => {
        const response: IDefaultAuthResponse = await request('register', HttpTypes.POST, body);

        if ( !response.successful  ) {
            return response as IRegisterFailure;
        }

        return response as IRegisterSuccess

    }

    const getUser = async (token: string) => {
        const response: IDefaultAuthResponse = await request('users/me', HttpTypes.GET, null, { Authorization: `Bearer ${token}`});

        if( !response.successful ) {
            return response as IGetUserFailure;
        }

        return response as IGetUserSuccess;
    }

    return {
        isLoading,
        error,
        clearError,
        signIn,
        signUp,
        getUser
    }
}
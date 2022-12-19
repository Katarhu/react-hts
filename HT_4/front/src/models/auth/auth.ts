import {IUser} from '../user';

export interface IAuthState {
    user: IUser | null;
    isLoading: boolean,
    error: string[] | null;
}

export interface IDefaultAuthResponse {
    successful: boolean
}

export interface IAuthError extends IDefaultAuthResponse {
    errors: string | string[];
    result?: string;
}


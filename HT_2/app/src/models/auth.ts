import {IUser} from './user';

export interface IAuthState {
    user: IUser | null;
    isLoading: boolean,
    error: string | null;
}

export interface ILoginCredentials {
    email: string;
    password: string;
}

export interface IRegisterCredentials {
    name: string;
    email: string;
    password: string;
}
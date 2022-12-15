import {IUser} from '../user';

export interface ILoginCredentials {
    email: string;
    password: string;
}

export interface ILoginSuccess {
    successful: true;
    result: string;
    user: IUser;
}

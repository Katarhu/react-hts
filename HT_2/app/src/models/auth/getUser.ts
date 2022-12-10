import {IUser} from '../user';

export interface IGetUserSuccess {
    successful: true;
    result: IUser;
}

export interface IGetUserFailure {
    successful: false
}
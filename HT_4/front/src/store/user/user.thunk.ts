import {getUser} from '../../services/user.service';
import {
    getUserAction,
    getUserSuccessAction,
    getUserFailureAction,
    loginUserAction,
    loginUserSuccessAction,
    loginUserFailureAction,
    logOutAction,
    logOutDoneAction,
    registerUserAction,
    registerUserSuccessAction,
    registerUserFailureAction
} from './user.action.creators';

import {IGetUserResponse} from '../../models/auth/getUser';
import {ILoginCredentials, ILoginResponse} from '../../models/auth/login';
import {IRegisterCredentials} from '../../models/auth/register';

import {loginUser, logOut, registerUser} from '../../services/auth.service';


export const getUserThunkAction: any = () => {
    return async (dispatch: any) => {
        dispatch(getUserAction());

        try {
            const response: IGetUserResponse = await getUser();

            dispatch(getUserSuccessAction(response));
        } catch (error: any) {
            dispatch(getUserFailureAction());

        }
    }
}

export const loginUserThunkAction = (credentials: ILoginCredentials): any => {
    return async (dispatch: any) => {
        dispatch(loginUserAction());
        try {
            const response: ILoginResponse = await loginUser(credentials);

            dispatch(loginUserSuccessAction(response));
        } catch (error: any) {
            dispatch(loginUserFailureAction(error as string));
        }
    }
}

export const registerUserThunkAction = (credentials: IRegisterCredentials): any => {
    return async (dispatch: any) => {
        dispatch(registerUserAction());

        try {
            await registerUser(credentials);

            dispatch(registerUserSuccessAction());
        } catch (error: any) {
            dispatch(registerUserFailureAction(error as string));
        }
    }
}

export const logoutThunkAction = (): any => {
    return async (dispatch: any) => {
        dispatch(logOutAction());
        try {
            await logOut();

            dispatch(logOutDoneAction());
        } catch (error) {
            // dispatch(log)
        }
    }
}
import { UserActions, AuthActions} from './user.types';
import {ILoginCredentials, ILoginResponse} from '../../models/auth/login';
import {IRegisterCredentials} from "../../models/auth/register";
import {IGetUserResponse} from '../../models/auth/getUser';

export const getUserAction = () => ({ type: UserActions.GET_USER });
export const getUserSuccessAction = (payload: IGetUserResponse) => ({ type: UserActions.GET_USER_SUCCESS, payload });
export const getUserFailureAction = () => ({ type: UserActions.GET_USER_FAILURE });

export const loginUserAction = () => ({ type: AuthActions.LOGIN_USER });
export const loginUserSuccessAction = (payload: ILoginResponse) => ({ type: AuthActions.LOGIN_USER_SUCCESS, payload });
export const loginUserFailureAction = (payload: string) => ({ type: AuthActions.LOGIN_USER_FAILURE, payload });

export const registerUserAction = () => ({ type: AuthActions.REGISTER_USER });
export const registerUserFailureAction = (payload: string) => ({ type: AuthActions.REGISTER_USER_FAILURE, payload });
export const registerUserSuccessAction = () => ({ type: AuthActions.REGISTER_USER_SUCCESS });

export const logOutAction = () => ({ type: AuthActions.LOGOUT });
export const logOutDoneAction = () => ({ type: AuthActions.LOGOUT_DONE });

export const clearUserStateAction = () => ({ type: UserActions.CLEAR_STATE });
export const clearUserErrorAction = () => ({ type: UserActions.CLEAR_ERROR });

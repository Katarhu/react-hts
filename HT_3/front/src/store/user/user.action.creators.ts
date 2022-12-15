import {AuthActions, UserActions} from "./user.types";
import {IUser} from "../../models/user";
import {ILoginCredentials, ILoginSuccess} from "../../models/auth/login";
import {IRegisterCredentials, IRegisterSuccess} from "../../models/auth/register";

export const getUser = () => ({ type: UserActions.GET_USER });
export const getUserSuccess = (payload: IUser) => ({ type: UserActions.GET_USER_SUCCESS, payload });
export const getUserFailure = (payload: string) => ({ type: UserActions.GET_USER_FAILURE, payload});

export const loginUser = (payload: ILoginCredentials) => ({ type: AuthActions.LOGIN_USER, payload });
export const loginUserFailure = (payload: string) => ({ type: AuthActions.LOGIN_USER_FAILURE, payload });
export const loginUserSuccess = (payload: IUser) => ({ type: AuthActions.LOGIN_USER_SUCCESS, payload });

export const registerUser = (payload: IRegisterCredentials) => ({ type: AuthActions.REGISTER_USER, payload });
export const registerUserFailure = (payload: string) => ({ type: AuthActions.REGISTER_USER_FAILURE, payload });
export const registerUserSuccess = () => ({ type: AuthActions.REGISTER_USER_SUCCESS });

export const logOut = () => ({ type: AuthActions.LOGOUT });

export const clearUserState = () => ({ type: UserActions.CLEAR_STATE });
export const clearUserError = () => ({ type: UserActions.CLEAR_ERROR });

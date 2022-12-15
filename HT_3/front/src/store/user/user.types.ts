import {IUser} from "../../models/user";
import {ILoginCredentials, ILoginSuccess} from "../../models/auth/login";
import {IRegisterCredentials, IRegisterSuccess} from "../../models/auth/register";

export interface IUserInitialState {
    user: IUser | null;
    loading: boolean;
    error: string;
}

export enum UserActions {
    GET_USER="GET_USER",
    GET_USER_SUCCESS="GET_USER_SUCCESS",
    GET_USER_FAILURE="GET_USER_FAILURE",

    CLEAR_STATE="CLEAR_STATE",
    CLEAR_ERROR="CLEAR_ERROR"
}

export enum AuthActions {
    REGISTER_USER="REGISTER_USER",
    REGISTER_USER_SUCCESS="REGISTER_USER_SUCCESS",
    REGISTER_USER_FAILURE="REGISTER_USER_FAILURE",

    LOGIN_USER="LOGIN_USER",
    LOGIN_USER_SUCCESS="LOGIN_USER_SUCCESS",
    LOGIN_USER_FAILURE="LOGIN_USER_FAILURE",

    LOGOUT="LOGOUT",
    LOGOUT_DONE="LOGOUT_DONE"
}

// **********************
// **********************

export interface LOGIN_USER {
    type: AuthActions.LOGIN_USER,
    payload: ILoginCredentials
}

export interface LOGIN_USER_SUCCESS {
    type: AuthActions.LOGIN_USER_SUCCESS,
    payload: ILoginSuccess
}

export interface LOGIN_USER_FAILURE {
    type: AuthActions.LOGIN_USER_FAILURE,
    payload: string
}

// **********************
// **********************

export interface REGISTER_USER {
    type: AuthActions.REGISTER_USER,
    payload: IRegisterCredentials
}

export interface REGISTER_USER_SUCCESS {
    type: AuthActions.REGISTER_USER_SUCCESS,
    payload: IRegisterSuccess
}

export interface REGISTER_USER_FAILURE {
    type: AuthActions.REGISTER_USER_FAILURE,
    payload: string
}

// **********************
// **********************

export interface GET_USER {
    type: UserActions.GET_USER,
}

export interface GET_USER_FAILURE {
    type: UserActions.GET_USER_FAILURE,
    payload: string
}

export interface GET_USER_SUCCESS {
    type: UserActions.GET_USER_SUCCESS,
    payload: IUser
}

// **********************
// **********************

interface USER_LOGOUT {
    type: AuthActions.LOGOUT
}

interface USER_LOGOUT_DONE {
    type: AuthActions.LOGOUT_DONE
}

// **********************
// **********************

export interface CLEAR_USER_STATE {
    type: UserActions.CLEAR_STATE
}

export interface CLEAR_ERROR {
    type: UserActions.CLEAR_ERROR
}

// **********************
// **********************

export type UserAction =
      GET_USER
    | GET_USER_FAILURE
    | GET_USER_SUCCESS
    | CLEAR_USER_STATE
    | LOGIN_USER
    | LOGIN_USER_FAILURE
    | LOGIN_USER_SUCCESS
    | REGISTER_USER
    | REGISTER_USER_FAILURE
    | REGISTER_USER_SUCCESS
    | USER_LOGOUT
    | USER_LOGOUT_DONE
    | CLEAR_ERROR

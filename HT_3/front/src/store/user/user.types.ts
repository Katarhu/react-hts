export interface IUserInitialState {
    isAuth: boolean;
    name: string;
    email: string;
    token: string;
}

enum GetUserActions {
    GET_USER="GET_USER",
    GET_USER_SUCCESS="GET_USER_SUCCESS",
    GET_USER_FAILURE="GET_USER_FAILURE"
}

interface GET_USER {
    type: GetUserActions.GET_USER,
}

interface GET_USER_FAILURE {
    type: GetUserActions.GET_USER_FAILURE
}

interface GET_USER_SUCCESS {
    type: GetUserActions.GET_USER_SUCCESS
}
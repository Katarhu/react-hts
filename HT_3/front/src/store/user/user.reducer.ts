import {AuthActions, IUserInitialState, UserAction, UserActions} from './user.types';


const initialState: IUserInitialState = {
    user: null,
    loading: false,
    error: '',
}

export const userReducer = (state: IUserInitialState = initialState, action: UserAction) => {
    switch (action.type) {
        case AuthActions.LOGIN_USER:
            return {
                ...state,
                loading: true
            }
        case AuthActions.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: true,
                error: '',
                user: action.payload.user
            }
        case AuthActions.LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload,
            }
        case AuthActions.REGISTER_USER:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case AuthActions.REGISTER_USER_FAILURE:
            return  {
                ...state,
                loading: false,
                error: action.payload
            }
        case AuthActions.REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ''
            }
        case UserActions.GET_USER:
            return {
                ...state,
                loading: true,
            }

        case UserActions.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case UserActions.GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case AuthActions.LOGOUT:
            return {
                ...state,
                loading: true
            }

        case AuthActions.LOGOUT_DONE:
            return  initialState

        case UserActions.CLEAR_STATE:
            return initialState

        case UserActions.CLEAR_ERROR:
            return {
                ...state,
                error: ''
            }

        default:
            return state;
    }
}

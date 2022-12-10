import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

import {useAuthService} from '../services/authService';
import useToken from '../hooks/useToken';

import { IRegisterFailure, IRegisterSuccess, IRegisterCredentials } from '../models/auth/register'
import { ILoginCredentials } from '../models/auth/login';
import {IAuthState} from '../models/auth/auth';
import {IUser} from '../models/user';
import {useAlert} from './AlertContext';



interface IAuthContextProviderProps {
    children: ReactNode;
}

interface IAuthContext {
    isAuth: boolean;
    isLoading: boolean;
    user: IUser | null;
    userState: IAuthState;
    error: string[] | null;
    clearError: () => void;
    handleLogOut: () => void;
    handleSignIn: (credentials: ILoginCredentials) => void;
    handleSignUp: (credentials: IRegisterCredentials) => Promise<IRegisterSuccess | IRegisterFailure>;
}

const initialState: IAuthState = {
    user: null,
    isLoading: false,
    error: null
}

const AuthContext = createContext({} as IAuthContext);

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }: IAuthContextProviderProps) {
    const {signIn, signUp, getUser, isLoading, error, clearError} = useAuthService();
    const [userState, setUserState] = useState<IAuthState>(initialState);
    const {token, deleteToken, setToken} = useToken();
    const {addAlert} = useAlert();

    useEffect(() => {
        if( token ) {
            handleGetUser(token);
        }
    }, [])

    const handleLogOut = () => {
        deleteToken();
    }

    const handleSignIn = async (credentials: ILoginCredentials) => {
        const response = await signIn(credentials);

        if( response.successful ) {
            const [,token] = response.result.split(' ');
            setToken(token);
            setUserState((userState) => ({...userState, user: response.user}));
        }
    }

    const handleSignUp = async (credentials: IRegisterCredentials) => {
        const response = await signUp(credentials);

        return response;
    }

    const handleGetUser = async (token: string): Promise<void> => {
        const response = await getUser(token);

        if( !response.successful ) {
            addAlert('Token either expired or invalid');
            clearError();
            deleteToken()
        } else {
            setUserState((userState) => ({ ...userState, user: response.result }));
        }
    }

    return (
        <AuthContext.Provider value={{
            isAuth: !!token,
            user: userState.user,
            userState,
            isLoading,
            error,
            clearError,
            handleSignIn,
            handleSignUp,
            handleLogOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}
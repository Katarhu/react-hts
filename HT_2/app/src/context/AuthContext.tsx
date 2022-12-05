import {createContext, ReactNode, useContext, useState} from 'react';

import {IAuthState, ILoginCredentials, IRegisterCredentials} from '../models/auth';

import useToken from '../hooks/useToken';
import {useHttp} from '../hooks/useHttp';


interface IAuthContextProviderProps {
    children: ReactNode;
}

interface AuthContext {
    isAuth: boolean;
    logOut: () => void;
    signIn: (credentials: ILoginCredentials) => void;
    signUp: (credentials: IRegisterCredentials) => void;
}

const initialState: IAuthState = {
    user: null,
    isLoading: false,
    error: ''
}

const AuthContext = createContext({} as AuthContext);

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }: IAuthContextProviderProps) {
    const {token, deleteToken, setToken} = useToken();
    const {request, isLoading, error} = useHttp();
    const [userState, setUserState] = useState<IAuthState>(initialState);

    const logOut = () => {
        deleteToken();
    }

    const signIn = (credentials: ILoginCredentials) => {
        setToken('something')
    }

    const signUp = (credentials: IRegisterCredentials) => {

    }

    return (
        <AuthContext.Provider value={{
            isAuth: !!token,
            signIn,
            logOut,
            signUp,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
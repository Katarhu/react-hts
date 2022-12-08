import {ILoginCredentials, IRegisterCredentials} from '../models/auth';
import {useHttp} from '../hooks/useHttp';

export const useAuthService = () => {
    const {isLoading, error, clearError, request} = useHttp();

    const signIn = (body: ILoginCredentials) => {

    }

    const signUp = (body: IRegisterCredentials) => {

    }

    return {
        isLoading,
        error,
        clearError,
        request,
        signIn,
        signUp
    }
}
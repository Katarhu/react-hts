import {useCallback, useState} from 'react';

import {environment} from '../environment';

import {HttpTypes} from '../common/types/http.types';
import {IAuthError} from '../models/auth/auth';

export function useHttp() {
    const [error, setError] = useState<null | string[]>(null);
    const [isLoading, setIsLoading] = useState(false);

    const request = useCallback(
        async (
            url: string,
            method= HttpTypes.GET,
            body: any | null = null,
            headers?: any
        ) => {
            setIsLoading(true);

            try {
                headers = {
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                    ...headers
                }

                if( body != null ) {
                    body = JSON.stringify(body ?? {});
                }

                const response: any = await fetch(`${environment.baseApiURL}/${url}`, {method, body, headers});

                if( !response.ok) {
                    const errorBody: IAuthError = await response.json();

                    if( Array.isArray(errorBody.errors) ) {
                        setError([...errorBody.errors]);
                    } else {
                        if( errorBody.result ) {
                            setError([errorBody.result]);
                        }
                    }

                    setIsLoading(false);
                    return errorBody;
                }

                const data = await response.json();

                setIsLoading(false);
                return data;

            } catch (e: any) {}
        },[])

    const clearError = useCallback(() => setError(null), []);

    return {isLoading, request, error, clearError};
}

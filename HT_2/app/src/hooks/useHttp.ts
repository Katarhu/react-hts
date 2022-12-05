import {useCallback, useState} from 'react';
import {HttpTypes} from '../common/types/http.types';
import {environment} from '../../environment';

export function useHttp() {
    const [error, setError] = useState<null | string>('');
    const [isLoading, setIsLoading] = useState(false);

    const request = useCallback(
        async (url: string, method= HttpTypes.GET, body=null, headers={'Content-type': 'application/json'}) => {
            setIsLoading(true);

            try {
                const response = await fetch(`${environment.baseUrl}/${url}`, {method, body, headers});

                if( !response.ok) {
                    throw new Error(`Could not fetch url, status ${response.status}`);
                }

                const data = await response.json();

                setIsLoading(false);
                return data;

            } catch (e: any) {
                setIsLoading(false);
                setError(e.message);
                throw e;
            }
        },[])

    const clearError = useCallback(() => setError(null), []);

    return {isLoading, request, error, clearError};
}
import {createContext, ReactNode, useContext, useState} from 'react';
import {IAuthor} from '../models/author';

interface AuthorsProviderProps {
    children: ReactNode;
}

interface IAuthorsContext {
    authors: IAuthor[];
    handleGetAuthors: () => void;
    handleCreateAuthor: () => void;
    handleGetAuthor: () => void;
    handleEditAuthor: () => void;
    handleDeleteAuthor: () => void;
}

const AuthorsContext = createContext({} as IAuthorsContext);

export function useAuthors() {
    return useContext(AuthorsContext);
}

export default function AuthorsProvider ({ children }: AuthorsProviderProps) {
    const [authors, setAuthors] = useState<IAuthor[]>([]);

    const handleGetAuthors = () => {};

    const handleCreateAuthor = () => {};

    const handleGetAuthor = () => {};

    const handleEditAuthor = () => {};

    const handleDeleteAuthor = () => {};

    return (
        <AuthorsContext.Provider value={{
            authors,
            handleGetAuthors,
            handleCreateAuthor,
            handleGetAuthor,
            handleEditAuthor,
            handleDeleteAuthor,
        }}>
            {children}
        </AuthorsContext.Provider>
    )
}
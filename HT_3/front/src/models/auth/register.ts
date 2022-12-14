export interface IRegisterCredentials {
    name: string;
    email: string;
    password: string;
}

export interface IRegisterFailure {
    errors: string[];
    successful: boolean;
}

export interface IRegisterSuccess {
    result: string;
    successful: boolean;
}
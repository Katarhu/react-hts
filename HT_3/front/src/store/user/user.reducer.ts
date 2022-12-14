import {IUserInitialState} from './user.types';


const initialState: IUserInitialState = {
    isAuth: false,
    email: '',
    name: '',
    token: ''
}

export const userReducer = (state: IUserInitialState = initialState, action: any) => {
    switch (action) {

        default:
            return state;
    }
}
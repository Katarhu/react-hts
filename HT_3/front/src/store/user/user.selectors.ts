import {IAuthState} from "../../models/auth/auth";
import {RootState} from "../index";


export const selectIsAuth = (state: RootState) => !!state.user.user;
export const selectUser = (state: RootState) => state.user.user;
export const selectAuthError = (state: RootState) => state.user.error;
export const selectAuthIsLoading = (state: RootState) => state.user.loading;

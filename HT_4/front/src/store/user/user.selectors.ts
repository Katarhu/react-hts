import {RootState} from "../index";


export const selectIsAuth = (state: RootState) => !!state.user.token;
export const selectUser = (state: RootState) => state.user.user;

export const selectAuthError = (state: RootState) => state.user.error;
export const selectAuthLoading = (state: RootState) => state.user.loading;

export const selectIsRegisterSuccess = (state: RootState) => state.user.success;

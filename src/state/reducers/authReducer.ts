import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AppDispatch } from '../store';
import { authService } from 'api/auth-api';
import { setIsLoading } from './appReducer';

import { User } from 'types/auth';

const initialState = {
  user: {} as User,
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isAuth = action.payload.value;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;

// actions
export const { setUser, setAuth } = authSlice.actions;

// thunk
export const login = (email: string, password: string) => (dispatch: AppDispatch) => {
  dispatch(setIsLoading({ value: true }));

  authService
    .login(email, password)
    .then((res) => {
      localStorage.setItem('token', res.accessToken);
      dispatch(setAuth({ value: true }));
      dispatch(setUser(res.user));
    })
    .catch((err: AxiosError) => {
      console.log(err.message);
    })
    .finally(() => {
      dispatch(setIsLoading({ value: false }));
    });
};

export const registration =
  (name: string, email: string, password: string, role: string) => (dispatch: AppDispatch) => {
    dispatch(setIsLoading({ value: true }));

    authService
      .registration(name, email, password, role)
      .then((res) => {
        localStorage.setItem('token', res.accessToken);
        dispatch(setAuth({ value: true }));
        dispatch(setUser(res.user));
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
      })
      .finally(() => {
        dispatch(setIsLoading({ value: false }));
      });
  };

export const logout = () => (dispatch: AppDispatch) => {
  authService
    .logout()
    .then(() => {
      localStorage.removeItem('token');
      dispatch(setAuth({ value: false }));
      dispatch(setUser({} as User));
    })
    .catch((err: AxiosError) => {
      console.log(err.message);
    });
};

import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../reducers/authReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

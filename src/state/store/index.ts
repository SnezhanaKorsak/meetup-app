import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../reducers/authReducer';
import { meetupReducer } from '../reducers/meetupReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    meetups: meetupReducer,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

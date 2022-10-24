import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from '../reducers/authReducer';
import { meetupReducer } from '../reducers/meetupReducer';
import { appReducer } from '../reducers/appReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  meetups: meetupReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

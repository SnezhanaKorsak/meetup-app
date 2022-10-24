import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isLoadingMeetup: true,
  isLoading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoadingMeetup: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isLoadingMeetup = action.payload.value;
    },
    setIsLoading: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isLoading = action.payload.value;
    },
  },
});

export const appReducer = appSlice.reducer;

// actions
export const { setIsLoadingMeetup, setIsLoading } = appSlice.actions;

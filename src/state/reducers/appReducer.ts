import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isLoadingMeetup: true,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoadingMeetup: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isLoadingMeetup = action.payload.value;
    },
  },
});

export const appReducer = appSlice.reducer;

// actions
export const { setIsLoadingMeetup } = appSlice.actions;

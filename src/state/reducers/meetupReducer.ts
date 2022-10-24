import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AppDispatch } from '../store';
import { meetupService } from 'api/meetup-api';
import { setIsLoadingMeetup } from './appReducer';

import { Meetup } from 'types/meetyps';

const initialState = {
  meetups: [] as Meetup[],
};

export const meetupSlice = createSlice({
  name: 'meetups',
  initialState,
  reducers: {
    setMeetups: (state, action: PayloadAction<Meetup[]>) => {
      state.meetups = action.payload;
    },
  },
});

export const meetupReducer = meetupSlice.reducer;

// actions
export const { setMeetups } = meetupSlice.actions;

// thunk
export const getAllMeetups = (filter?: string, sortQuery?: string) => (dispatch: AppDispatch) => {
  dispatch(setIsLoadingMeetup({ value: true }));

  meetupService
    .fetchAllMeetups(filter, sortQuery)
    .then((res) => {
      dispatch(setMeetups(res.data));
      dispatch(setIsLoadingMeetup({ value: false }));
    })
    .catch((err: AxiosError) => {
      console.log(err.message);
    });
};

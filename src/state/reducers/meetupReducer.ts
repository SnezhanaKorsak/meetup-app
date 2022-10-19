import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AppDispatch } from '../store';

import { Meetup } from 'types/meetyps';
import { meetupService } from '../../api/meetup-api';

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
export const getAllMeetups = () => (dispatch: AppDispatch) => {
  meetupService
    .fetchAllMeetups()
    .then((res) => {
      dispatch(setMeetups(res.data));
    })
    .catch((err: AxiosError) => {
      console.log(err.message);
    });
};

export const addMeetup = (newMeetup: Omit<Meetup, 'id' | 'user_id'>) => (dispatch: AppDispatch) => {
  meetupService
    .createMeetup(newMeetup)
    .then(() => {
      dispatch(getAllMeetups());
    })
    .catch((err: AxiosError) => {
      console.log(err.message);
    });
};
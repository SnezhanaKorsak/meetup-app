import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AppDispatch } from '../store';
import { meetupService } from 'api/meetup-api';
import { setIsLoadingMeetup, setIsLoading } from './appReducer';

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

export const createNewMeetup =
  (newMeetup: Omit<Meetup, 'id' | 'user_id'>) => (dispatch: AppDispatch) => {
    dispatch(setIsLoading({ value: true }));

    meetupService
      .createMeetup(newMeetup)
      .then(() => dispatch(setIsLoading({ value: false })))
      .catch((err: AxiosError) => {
        console.log(err.message);
      });
  };

export const updateMeetup =
  (meetupId: string, newMeetup: Omit<Meetup, 'id' | 'user_id'>) => (dispatch: AppDispatch) => {
    dispatch(setIsLoading({ value: true }));

    meetupService
      .updateMeetup(meetupId, newMeetup)
      .then(() => dispatch(setIsLoading({ value: false })))
      .catch((err: AxiosError) => {
        console.log(err.message);
      });
  };

export const deleteMeetupById = (meetupId: string) => (dispatch: AppDispatch) => {
  dispatch(setIsLoading({ value: true }));

  meetupService
    .deleteMeetup(meetupId)
    .then(() => {
      dispatch(getAllMeetups());
      dispatch(setIsLoading({ value: false }));
    })
    .catch((err: AxiosError) => {
      console.log(err.message);
    });
};

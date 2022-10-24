import instance from './index';

import { Meetup } from 'types/meetyps';
import { AxiosError } from 'axios';

export const meetupService = {
  fetchAllMeetups(filter = '', sortQuery = '') {
    return instance.get<Meetup[]>(`api/meetups?${sortQuery}${filter}`);
  },
  getMeetupById(meetupId: string) {
    return instance.get<Meetup>(`api/meetups/${meetupId}`);
  },
  createMeetup(newMeetup: Omit<Meetup, 'id' | 'user_id'>) {
    return instance
      .post<Meetup>('api/meetups', newMeetup)
      .then((res) => res.data)
      .catch((err: AxiosError) => {
        console.log(err.message);
      });
  },
  updateMeetup(meetupId: string, newMeetup: Omit<Meetup, 'id' | 'user_id'>) {
    return instance.put(`api/meetups/${meetupId}`, { ...newMeetup });
  },
  deleteMeetup(meetupId: string) {
    return instance.delete(`api/meetups/${meetupId}`);
  },
  searchMeetup(searchValue = '') {
    return instance.get<Meetup[]>(`api/meetups?search=${searchValue}`);
  },
};

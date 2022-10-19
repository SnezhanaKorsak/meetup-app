import instance from './index';

import { Meetup } from 'types/meetyps';

export const meetupService = {
  fetchAllMeetups() {
    return instance.get<Meetup[]>('api/meetups');
  },
  createMeetup(newMeetup: Omit<Meetup, 'id' | 'user_id'>) {
    return instance.post<Meetup>('api/meetups', newMeetup);
  },
};

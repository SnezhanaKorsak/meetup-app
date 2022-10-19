import instance from './index';

import { Meetup } from 'types/meetyps';

export const meetupService = {
  fetchAllMeetups(filter: string, sortQuery: string) {
    return instance.get<Meetup[]>(`api/meetups?${sortQuery}${filter}`);
  },
  createMeetup(newMeetup: Omit<Meetup, 'id' | 'user_id'>) {
    return instance.post<Meetup>('api/meetups', newMeetup);
  },
};

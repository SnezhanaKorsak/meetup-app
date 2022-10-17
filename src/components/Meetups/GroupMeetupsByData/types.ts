import { Meetup } from '../MeetupItem/types';

export type GroupMeetupsByDateProps = {
  day: string;
  meetups: Meetup[];
};

export type Meetup = {
  id: string;
  title: string;
  description: string;
  time: string;
  place: string;
  image: string;
  user_id: string;
};

export type MeetupResponse = {
  meetups: Meetup[];
};

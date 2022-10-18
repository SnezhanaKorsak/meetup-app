import React from 'react';

import { formatDate } from 'helpers/';

import MeetupItem from '../MeetupItem';

import { GroupHeader } from './styled';
import { GroupMeetupsByDateProps } from './types';

const GroupMeetupsByDate: React.FC<GroupMeetupsByDateProps> = ({ day, meetups }) => {
  if (meetups.length === 0) return null;

  const data = formatDate(day);
  return (
    <>
      <GroupHeader>{data}</GroupHeader>

      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </>
  );
};

export default GroupMeetupsByDate;

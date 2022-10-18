import React from 'react';

import GroupMeetupsByDate from '../GroupMeetupsByDate';
import { getWeekArr } from 'helpers';

import { MeetupsContainerProps } from './types';

const data = [
  {
    id: '7306dd6b-ccc30f-4417-b27e-45218050bff0',
    title: 'Web3: From zero to hero',
    description: 'Women Who Code',
    time: '2022-10-21T14:00:00.000Z',
    place: 'Online',
    user_id: '87564d85-ce27-4d83-ab5e-821334365514',
  },
  {
    id: '7306dd6b-c30f-4417-b27e-45218050bff0',
    title: 'Node JS',
    description: 'Project discussion and code review',
    time: '2022-10-23T14:00:00.000Z',
    place: 'Online',
    user_id: '87564d85-ce27-4d83-ab5e-821334365514',
  },
];

const MeetupsContainer: React.FC<MeetupsContainerProps> = ({ date }) => {
  const currentDate = new Date(date || '');

  const week = getWeekArr(currentDate);

  const getGroupMeetupsByDay = (selectedDay: string) =>
    data.filter((meetup) => meetup.time.split('T')[0] === selectedDay);

  const mappedItems = week.map((day) => (
    <GroupMeetupsByDate key={day} day={day} meetups={getGroupMeetupsByDay(day)} />
  ));

  const isEmptyList = mappedItems.every((item) => item.props.meetups.length === 0);

  return (
    <>
      {mappedItems}
      {isEmptyList && (
        <div>
          The nearest meetups were not found. Please choose a different date or change the filter
          settings
        </div>
      )}
    </>
  );
};

export default MeetupsContainer;

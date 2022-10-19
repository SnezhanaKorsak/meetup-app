import React from 'react';

import { getWeekArr } from 'helpers/index';

import GroupMeetupsByDate from '../GroupMeetupsByDate';

import { MeetupsContainerProps } from './types';

const MeetupsContainer: React.FC<MeetupsContainerProps> = ({ date, meetups }) => {
  const currentDate = new Date(date || '');
  const week = getWeekArr(currentDate);

  const getGroupMeetupsByDay = (selectedDay: string) =>
    meetups.filter((meetup) => meetup.time.split('T')[0] === selectedDay);

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

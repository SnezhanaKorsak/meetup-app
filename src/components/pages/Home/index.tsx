import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { v4 } from 'uuid';

import { LOGIN_ROUTE } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'hooks/index';

import Calendar from 'components/Calendar';
import Greeting from 'components/Greeting';
import Categories from 'components/Categories';
import MeetupsContainer from 'components/Meetups/MeetupsContainer';

import { Wrapper } from 'components/layouts';
import { Container } from './styled';
import { getAllMeetups } from '../../../state/reducers/meetupReducer';
import MeetupSkeleton from '../../../common/MeetupSkeleton';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const meetups = useAppSelector((state) => state.meetups.meetups);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const isLoading = useAppSelector((state) => state.app.isLoadingMeetup);

  const [date, setDate] = useState<Date | null>(new Date());
  const [filterType, setFilterType] = useState('Any type');
  const [sortType, setSortType] = useState('No sorting');

  useEffect(() => {
    const filter = filterType === 'Any type' ? '' : `&place=${filterType}`;
    let sortQuery = '';

    if (sortType !== 'No sorting') {
      const sort = sortType.split(' ')[0].toLowerCase();
      const order = `order=${sortType.split(' ')[1].slice(1, -1)}`;
      sortQuery = `sortBy=${sort}&${order}`;
    }

    dispatch(getAllMeetups(filter, sortQuery));
  }, [filterType, sortType]);

  if (!isAuth) {
    return <Navigate to={LOGIN_ROUTE} />;
  }

  return (
    <>
      <Greeting />
      <Wrapper>
        <Calendar date={date} setDate={setDate} />
        <Container>
          <Categories
            sortType={sortType}
            filterType={filterType}
            setSortType={setSortType}
            setFilterType={setFilterType}
          />
          {isLoading ? (
            [...new Array(2)].map(() => <MeetupSkeleton key={v4()} />)
          ) : (
            <MeetupsContainer date={date} meetups={meetups} />
          )}
        </Container>
      </Wrapper>
    </>
  );
};

export default HomePage;

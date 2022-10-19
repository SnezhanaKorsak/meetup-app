import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { LOGIN_ROUTE } from 'constants/index';
import { useAppSelector } from 'hooks/index';

import Calendar from 'components/Calendar';
import Greeting from 'components/Greeting';
import Categories from 'components/Categories';
import MeetupsContainer from 'components/Meetups/MeetupsContainer';

import { Wrapper } from 'components/layouts';
import { Container } from './styled';

const HomePage = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const [date, setDate] = useState<Date | null>(new Date());

  if (!isAuth) {
    return <Navigate to={LOGIN_ROUTE} />;
  }

  return (
    <>
      <Greeting />
      <Wrapper>
        <Calendar date={date} setDate={setDate} />
        <Container>
          <Categories />
          <MeetupsContainer date={date} />
        </Container>
      </Wrapper>
    </>
  );
};

export default HomePage;

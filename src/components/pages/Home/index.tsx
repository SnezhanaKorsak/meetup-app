import React, { useState } from 'react';

import Calendar from 'components/Calendar';
import Greeting from 'components/Greeting';
import Categories from 'components/Categories';
import MeetupsContainer from 'components/Meetups/MeetupsContainer';

import { Wrapper } from 'components/layouts';
import { Container } from './styled';

const HomePage = () => {
  const [date, setDate] = useState<Date | null>(new Date());

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

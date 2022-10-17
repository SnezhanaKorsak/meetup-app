import React from 'react';

import { formatTime } from 'helpers/';

import { Wrapper, Container, Image, Time, Title, Description, Place } from './styled';
import { Meetup } from './types';

const MeetupItem: React.FC<Meetup> = ({ title, description, time, place }) => {
  const formattedTime = formatTime(time);

  return (
    <Wrapper>
      <Image img={''} />
      <Container>
        <Time>{formattedTime}</Time>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Place>{place}</Place>
      </Container>
    </Wrapper>
  );
};

export default MeetupItem;

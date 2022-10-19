import React, { useState } from 'react';

import { formatTime } from 'helpers/';
import { EDIT_MEETUP } from 'constants/index';

import { Wrapper, Container, Image, Time, Title, Description, Place, HiddenButton } from './styled';
import { NavLink } from './styled';
import { Meetup } from 'types/meetyps';

const MeetupItem: React.FC<Meetup> = ({ id, title, description, time, place, image }) => {
  const [hidden, setHidden] = useState(true);

  const formattedTime = formatTime(time);
  const linkToEdit = EDIT_MEETUP + `${id}`;

  const onMouseEnterHandler = () => setHidden(false);
  const onMouseLeaveHandler = () => setHidden(true);

  return (
    <Wrapper onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <Image img={image} />

      <Container>
        <Time>{formattedTime}</Time>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Place>{place}</Place>
      </Container>

      <HiddenButton hidden={hidden}>
        <NavLink to={linkToEdit}>Edit</NavLink>
      </HiddenButton>
    </Wrapper>
  );
};

export default MeetupItem;

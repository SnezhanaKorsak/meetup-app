import React, { useState } from 'react';

import { formatTime } from 'helpers/';
import { useAppDispatch, useAppSelector } from 'hooks/index';
import { EDIT_MEETUP } from 'constants/index';
import { deleteMeetupById } from 'state/reducers/meetupReducer';

import {
  Wrapper,
  Container,
  Image,
  Time,
  Title,
  Description,
  Place,
  HiddenButton,
  NavLink,
  DeleteIcon,
} from './styled';
import { Meetup } from 'types/meetyps';

import trashIcon from 'assets/images/trash_icon.svg';

const MeetupItem: React.FC<Meetup> = ({
  id,
  title,
  description,
  time,
  place,
  image,
  user_id: meetupUserId,
}) => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector((state) => state.auth.user.id);

  const [hidden, setHidden] = useState(true);

  const formattedTime = formatTime(time);
  const linkToEdit = EDIT_MEETUP + `${id}`;

  const isOwner = currentUserId === meetupUserId;

  const onMouseEnterHandler = () => setHidden(false);
  const onMouseLeaveHandler = () => setHidden(true);

  const deleteMeetup = () => {
    dispatch(deleteMeetupById(id));
  };

  return (
    <Wrapper onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <Image img={image} />

      <Container>
        <Time>{formattedTime}</Time>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Place>{place}</Place>
      </Container>

      {isOwner && (
        <HiddenButton hidden={hidden}>
          <NavLink to={linkToEdit}>Edit</NavLink>
          <DeleteIcon onClick={deleteMeetup}>
            <img src={trashIcon} alt='delete' />
          </DeleteIcon>
        </HiddenButton>
      )}
    </Wrapper>
  );
};

export default MeetupItem;

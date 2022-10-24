import React from 'react';

import { FilterButton } from './styled';
import { useAppDispatch } from '../../hooks';
import { getAllMeetups } from '../../state/reducers/meetupReducer';

const ResetButton = () => {
  const dispatch = useAppDispatch();

  const buttonClickHandler = () => dispatch(getAllMeetups());

  return <FilterButton onClick={buttonClickHandler}>Reset</FilterButton>;
};

export default ResetButton;

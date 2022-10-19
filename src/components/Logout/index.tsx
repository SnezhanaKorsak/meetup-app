import React from 'react';

import { useAppDispatch } from 'hooks';
import { logout } from 'state/reducers/authReducer';

import { StyledButton } from './styled';

const Logout = () => {
  const dispatch = useAppDispatch();

  const buttonClickHandler = () => dispatch(logout());

  return <StyledButton onClick={buttonClickHandler}>Logout</StyledButton>;
};

export default Logout;

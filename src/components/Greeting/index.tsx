import React from 'react';
import { useAppSelector } from 'hooks/index';

import { SubTitle, Title } from './styled';

const Greeting = () => {
  const userName = useAppSelector((state) => state.auth.user.name);

  return (
    <>
      <Title>{`Welcome, ${userName}`}</Title>
      <SubTitle>Take part in events</SubTitle>
    </>
  );
};

export default Greeting;

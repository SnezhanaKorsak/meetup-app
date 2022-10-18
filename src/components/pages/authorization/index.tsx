import React from 'react';

import LoginForm from 'components/pages/authorization/LoginForm';

import { Wrapper, Container } from './styled';
import RegistrationForm from './RegistrationForm';

const Authorization = () => {
  const isAuthorized = false;

  return (
    <Wrapper>
      <Container>{isAuthorized ? <LoginForm /> : <RegistrationForm />}</Container>
    </Wrapper>
  );
};

export default Authorization;

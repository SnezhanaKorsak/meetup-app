import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';

import { REGISTRATION_ROUTE } from 'constants/index';

import LoginForm from 'components/pages/authorization/LoginForm';

import { Wrapper, Container, Link } from './styled';
import { useAppSelector } from 'hooks/index';

const Authorization = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  if (isAuth) {
    return <Navigate to='/' />;
  }

  return (
    <Wrapper>
      <Container>
        <LoginForm />
        <Link>
          Sign in with an existing account or
          <NavLink to={REGISTRATION_ROUTE}> register a new account</NavLink>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Authorization;

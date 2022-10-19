import React from 'react';

import { useAppSelector } from 'hooks/index';

import { StyledHeader, StyledLogo } from 'components/Header/styled';
import Navigation from 'components/Navigation';

import logo from 'assets/images/logo.jpg';

const Header = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
    <StyledHeader>
      <StyledLogo src={logo} alt='logo' />
      {isAuth && <Navigation />}
    </StyledHeader>
  );
};

export default Header;

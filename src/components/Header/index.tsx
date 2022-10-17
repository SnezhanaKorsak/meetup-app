import React from 'react';

import { StyledHeader, StyledLogo } from 'components/Header/styled';
import Navigation from 'components/Navigation';

import logo from 'assets/images/logo.jpg';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt='logo' />
      <Navigation />
    </StyledHeader>
  );
};

export default Header;

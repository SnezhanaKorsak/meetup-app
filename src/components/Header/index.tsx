import React from 'react';

import { useAppSelector } from 'hooks/index';
import { LOGIN_ROUTE } from 'constants/index';

import Navigation from 'components/Navigation';

import { StyledHeader, StyledLogo } from 'components/Header/styled';
import { NavLink } from '../Navigation/styled';

import logo from 'assets/images/logo.jpg';

const Header = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
    <StyledHeader>
      <StyledLogo src={logo} alt='logo' />
      {isAuth ? <Navigation /> : <NavLink to={LOGIN_ROUTE}>Login</NavLink>}
    </StyledHeader>
  );
};

export default Header;

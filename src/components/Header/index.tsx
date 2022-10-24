import React from 'react';

import { useAppSelector } from 'hooks/index';
import { LOGIN_ROUTE } from 'constants/index';

import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import Navigation from 'components/Navigation';

import { StyledHeader, StyledLogo } from 'components/Header/styled';
import { NavLink } from '../Navigation/styled';

import logo from 'assets/images/logo.jpg';
import SearchField from '../SearchField';

const Header = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const isLoading = useAppSelector((state) => state.app.isLoading);

  return (
    <>
      <StyledHeader>
        <StyledLogo src={logo} alt='logo' />

        <SearchField />

        {isAuth ? <Navigation /> : <NavLink to={LOGIN_ROUTE}>Login</NavLink>}
      </StyledHeader>

      {isLoading && <LinearProgress color='error' />}
    </>
  );
};

export default Header;

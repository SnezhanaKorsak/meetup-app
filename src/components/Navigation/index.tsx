import React from 'react';
import { useLocation } from 'react-router-dom';

import { NavLink, StyledNavigation } from 'components/Navigation/styled';

import { HOME_PAGE_ROUTE, ADD_MEETUP_ROUTE, LOGIN_ROUTE } from 'constants/index';

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <StyledNavigation id='navigation'>
      <NavLink to={HOME_PAGE_ROUTE} isActive={path === HOME_PAGE_ROUTE}>
        Home
      </NavLink>
      <NavLink to={ADD_MEETUP_ROUTE} isActive={path === ADD_MEETUP_ROUTE}>
        Add event
      </NavLink>
      <NavLink to={LOGIN_ROUTE} isActive={path === LOGIN_ROUTE}>
        Log in
      </NavLink>
    </StyledNavigation>
  );
};

export default Navigation;

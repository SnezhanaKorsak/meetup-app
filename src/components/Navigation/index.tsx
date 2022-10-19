import React from 'react';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from 'hooks/index';

import Logout from 'components/Logout';

import { HOME_PAGE_ROUTE, ADD_MEETUP_ROUTE } from 'constants/index';
import { NavLink, StyledNavigation } from 'components/Navigation/styled';

const Navigation = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const userRole = useAppSelector((state) => state.auth.user.role);
  const location = useLocation();
  const path = location.pathname;

  return (
    <StyledNavigation>
      <NavLink to={HOME_PAGE_ROUTE} isActive={path === HOME_PAGE_ROUTE}>
        Home
      </NavLink>
      {userRole === 'Admin' && (
        <NavLink to={ADD_MEETUP_ROUTE} isActive={path === ADD_MEETUP_ROUTE}>
          Add event
        </NavLink>
      )}

      {isAuth && <Logout />}
    </StyledNavigation>
  );
};

export default Navigation;

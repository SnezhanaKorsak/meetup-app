import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.div`
  min-width: ${({ theme }) => theme.spaces[9]}px;
  display: flex;
  justify-content: space-between;
`;

export const NavLink = styled(Link)<{ isActive?: boolean }>`
  border-bottom: 2px solid;
  border-color: ${({ isActive, theme }) => (isActive ? theme.colors.accent : 'transparent')};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: ${({ theme }) => theme.spaces[3]}px;
`;

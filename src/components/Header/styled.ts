import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: ${({ theme }) => theme.spaces[9]}%;
  height: ${({ theme }) => theme.spaces[8]}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pink};
  padding: ${({ theme }) => theme.spaces[3]}px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledLogo = styled.img`
  height: ${({ theme }) => theme.spaces[7]}px;
  width: auto;
`;

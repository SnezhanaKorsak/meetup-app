import styled from 'styled-components';

export const FilterButton = styled.button`
  width: ${({ theme }) => theme.spaces[8]}px;
  height: ${({ theme }) => theme.spaces[5]}px;
  border-radius: ${({ theme }) => theme.borderRadius[2]}px;
  background-color: ${({ theme }) => theme.colors.pink};
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  cursor: pointer;
`;

import styled from 'styled-components';

export const FilterButton = styled.button`
  width: ${({ theme }) => theme.spaces[10]}px;
  height: ${({ theme }) => theme.spaces[5]}px;
  border-radius: ${({ theme }) => theme.borderRadius[2]}px;
  background-color: ${({ theme }) => theme.colors.pink};
  border: none;
  outline: none;
  margin-right: ${({ theme }) => theme.spaces[5]}px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
`;

export const Select = styled.select`
  width: ${({ theme }) => theme.spaces[10]}px;
  margin-top: ${({ theme }) => theme.spaces[2]}px;
`;

export const SelectedFilter = styled.div`
  display: flex;
  flex-direction: column;
`;

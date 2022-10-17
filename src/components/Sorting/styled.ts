import styled from 'styled-components';

export const SortButton = styled.button`
  width: ${({ theme }) => theme.spaces[11]}px;
  height: ${({ theme }) => theme.spaces[5]}px;
  border-radius: ${({ theme }) => theme.borderRadius[2]}px;
  background-color: ${({ theme }) => theme.colors.pink};
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
`;

export const Select = styled.select`
  width: ${({ theme }) => theme.spaces[10]}px;
  margin-top: ${({ theme }) => theme.spaces[2]}px;
`;

export const SelectedSort = styled.div`
  display: flex;
  flex-direction: column;
`;

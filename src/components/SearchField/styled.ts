import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ theme }) => theme.spaces[12]}px;
  display: flex;
  flex-direction: row;
`;

export const SearchInput = styled.input`
  width: ${({ theme }) => theme.spaces[11]}px;
  height: ${({ theme }) => theme.spaces[4]}px;
  padding: 0 ${({ theme }) => theme.spaces[1]}px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius[0]}px 0 0
    ${({ theme }) => theme.borderRadius[0]}px;
  outline: none;
`;

export const SearchButton = styled.button`
  width: ${({ theme }) => theme.spaces[4]}px;
  height: ${({ theme }) => theme.spaces[4]}px;
  border: none;
  border-radius: 0 ${({ theme }) => theme.borderRadius[0]}px
    ${({ theme }) => theme.borderRadius[0]}px 0;
  outline: none;
  cursor: pointer;
`;

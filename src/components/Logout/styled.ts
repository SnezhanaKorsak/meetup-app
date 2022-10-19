import styled from 'styled-components';

export const StyledButton = styled.button`
  width: ${({ theme }) => theme.spaces[9]}px;
  height: ${({ theme }) => theme.spaces[4]}px;
  border-radius: ${({ theme }) => theme.spaces[1]}px;
  background-color: ${({ theme }) => theme.colors.pink};
  margin-left: ${({ theme }) => theme.spaces[3]}px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

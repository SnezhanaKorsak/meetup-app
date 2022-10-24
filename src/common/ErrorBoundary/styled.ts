import styled from 'styled-components';

export const StyledErrorMessage = styled.div`
  width: ${({ theme }) => theme.spaces[16]}px;
  height: ${({ theme }) => theme.spaces[9]}px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px double ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  padding: ${({ theme }) => theme.spaces[2]}px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
`;

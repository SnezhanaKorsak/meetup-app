import styled from 'styled-components';

export const GroupHeader = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spaces[5]}px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
  line-height: ${({ theme }) => theme.spaces[5]}px;
  margin-bottom: ${({ theme }) => theme.spaces[1]}px;
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
`;

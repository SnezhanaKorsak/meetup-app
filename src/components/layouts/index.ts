import styled from 'styled-components';

export const PageLayout = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces[3]}px;
`;

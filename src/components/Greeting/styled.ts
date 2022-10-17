import styled from 'styled-components';

export const Title = styled.h1`
  margin: ${({ theme }) => theme.spaces[3]}px;
  margin-bottom: ${({ theme }) => theme.spaces[1]}px;
  font-weight: 600;
`;

export const SubTitle = styled.h2`
  margin: ${({ theme }) => theme.spaces[3]}px;
  margin-top: ${({ theme }) => theme.spaces[1]}px;
  font-family: ${({ theme }) => theme.font};
  font-weight: 400;
`;

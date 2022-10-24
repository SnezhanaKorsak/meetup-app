import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spaces[9]}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces[2]}px 0;
`;

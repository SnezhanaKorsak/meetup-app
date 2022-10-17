import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;

  button.Mui-selected {
    background-color: ${({ theme }) => theme.colors.pink};
  }
`;

import styled from 'styled-components';

export const StyledToggle = styled.span`
  width: ${({ theme }) => theme.spaces[4]}px;
  height: ${({ theme }) => theme.spaces[4]}px;
  display: inline-block;
  margin-left: ${({ theme }) => theme.spaces[4]}px;
  line-height: ${({ theme }) => theme.spaces[4]}px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    line-height: 28px;
  }
`;

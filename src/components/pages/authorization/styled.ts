import styled from 'styled-components';
import { Field } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: ${({ theme }) => theme.spaces[4]}%;
`;

export const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spaces[3]}px;
`;

export const RadioField = styled(Field)`
  width: ${({ theme }) => theme.spaces[3]}px;
  height: ${({ theme }) => theme.spaces[3]}px;
  margin-right: ${({ theme }) => theme.spaces[2]}px;
`;

export const Radio = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.gray};
`;

import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  width: ${({ theme }) => theme.spaces[7]}%;
  padding: 0 ${({ theme }) => theme.spaces[6]}px;
`;

export const StyledField = styled(Field)`
  width: 100%;
  height: ${({ theme }) => theme.spaces[4]}px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  margin-bottom: ${({ theme }) => theme.spaces[4]}px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.spaces[2]}px;
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
  width: ${({ theme }) => theme.spaces[9]}px;
  height: ${({ theme }) => theme.spaces[4]}px;
  border-radius: ${({ theme }) => theme.spaces[1]}px;
  background-color: ${({ theme }) => theme.colors.pink};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);
`;

export const ErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.error};
  margin: ${({ theme }) => theme.spaces[1]}px 0;
`;

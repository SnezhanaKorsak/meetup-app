import styled from 'styled-components';
import { Form } from 'formik';

export const EditForm = styled(Form)`
  width: ${({ theme }) => theme.spaces[7]}%;
  margin: auto ${({ theme }) => theme.spaces[3]}%;
  // height: ${({ theme }) => theme.spaces[10]}px;
`;

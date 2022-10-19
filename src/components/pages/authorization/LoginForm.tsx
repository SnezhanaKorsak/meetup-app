import React from 'react';
import { Formik, Form } from 'formik';

import { LoginSchema } from 'common/validation';
import { useAppDispatch } from 'hooks/index';
import { login } from 'state/reducers/authReducer';

import { ErrorMessage, StyledField, SubmitButton } from '../AddMeetup/styled';
import { LoginFormValues } from './types';

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const onSubmitHandler = (values: LoginFormValues) => {
    const { email, password } = values;

    dispatch(login(email, password));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitHandler}
        validationSchema={LoginSchema}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            <StyledField id='email' name='email' placeholder='Email' />

            {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            <StyledField id='password' type='password' name='password' placeholder='Password' />

            <SubmitButton type='submit' disabled={isValidating}>
              Login
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;

import React from 'react';
import { Formik, Form } from 'formik';
import { Navigate } from 'react-router-dom';

import { RegistrationSchema } from 'common/validation';
import { useAppDispatch, useAppSelector } from 'hooks/index';
import { registration } from 'state/reducers/authReducer';

import { ErrorMessage, StyledField, SubmitButton } from '../AddMeetup/styled';
import { RadioBox, RadioField, Radio, RadioLabel, Wrapper, Container } from './styled';
import { RegistrationFormValues } from './types';

const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  if (isAuth) {
    return <Navigate to='/' />;
  }

  const initialValues: RegistrationFormValues = {
    name: '',
    email: '',
    password: '',
    role: '',
  };

  const onSubmitHandler = (values: RegistrationFormValues) => {
    const { name, email, password, role } = values;

    dispatch(registration(name, email, password, role));
  };

  return (
    <Wrapper>
      <Container>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitHandler}
          validationSchema={RegistrationSchema}
        >
          {({ errors, touched, isValidating }) => (
            <Form>
              {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              <StyledField id='name' name='name' placeholder='Name' />

              {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              <StyledField id='email' name='email' placeholder='Email' />

              {errors.password && touched.password && (
                <ErrorMessage>{errors.password}</ErrorMessage>
              )}
              <StyledField id='password' type='password' name='password' placeholder='Password' />

              <RadioBox>
                <Radio>
                  <RadioField id='role1' type='radio' name='role' value='User' checked />
                  <RadioLabel htmlFor='role1'>User</RadioLabel>
                </Radio>

                <Radio>
                  <RadioField id='role2' type='radio' name='role' value='Admin' />
                  <RadioLabel htmlFor='role2'>Admin</RadioLabel>
                </Radio>
              </RadioBox>

              <SubmitButton type='submit' disabled={isValidating}>
                Registration
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </Container>
    </Wrapper>
  );
};

export default RegistrationForm;

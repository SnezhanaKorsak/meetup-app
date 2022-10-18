import React from 'react';
import { Formik, Form, Field } from 'formik';

import { RegistrationSchema } from 'common/validation';

import { ErrorMessage, StyledField, SubmitButton } from '../AddMeetup/styled';
import { RadioBox, RadioField, Radio, RadioLabel } from './styled';
import { RegistrationFormValues } from './types';

const RegistrationForm = () => {
  const initialValues: RegistrationFormValues = {
    name: '',
    email: '',
    password: '',
    role: '',
  };

  const onSubmitHandler = (values: RegistrationFormValues) => {
    console.log(values);
  };

  return (
    <>
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

            {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
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
    </>
  );
};

export default RegistrationForm;

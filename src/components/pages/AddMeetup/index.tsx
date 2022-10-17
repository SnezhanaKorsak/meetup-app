import React, { useState } from 'react';
import { Formik, Form } from 'formik';

import Calendar from 'components/Calendar';
import Greeting from 'components/Greeting';

import { AddMeetupSchema } from 'common/validation';
import { getDateWithTime } from 'helpers';

import { Wrapper } from 'components/layouts';
import { Container, ErrorMessage, Label, StyledField, SubmitButton } from './styled';
import { MeetupsFormValues } from './types';

const AddMeetup = () => {
  const initialValues: MeetupsFormValues = {
    title: '',
    description: '',
    time: '',
    place: '',
    image: '',
  };

  const [date, setDate] = useState<Date | null>(new Date());

  const onSubmitHandler = (values: MeetupsFormValues) => {
    const time = getDateWithTime(values.time, date);
    console.log({ ...values, time });
  };

  return (
    <>
      <Greeting />
      <Wrapper>
        <Calendar date={date} setDate={setDate} />
        <Container>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmitHandler}
            validationSchema={AddMeetupSchema}
          >
            {({ errors, touched, isValidating }) => (
              <Form>
                {errors.title && touched.title && <ErrorMessage>{errors.title}</ErrorMessage>}
                <StyledField id='title' name='title' placeholder='Title' />

                {errors.description && touched.description && (
                  <ErrorMessage>{errors.description}</ErrorMessage>
                )}
                <StyledField id='description' name='description' placeholder='Description' />

                {errors.place && touched.place && <ErrorMessage>{errors.place}</ErrorMessage>}
                <StyledField id='place' type='text' name='place' placeholder='Place' />

                {errors.image && touched.image && <ErrorMessage>{errors.image}</ErrorMessage>}
                <StyledField id='image' type='text' name='image' placeholder='Image URL' />

                {errors.time && touched.time && <ErrorMessage>{errors.time}</ErrorMessage>}
                <Label htmlFor='time'>Time</Label>
                <StyledField id='time' name='time' type='time' />

                <SubmitButton type='submit' disabled={isValidating}>
                  Submit
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </Container>
      </Wrapper>
    </>
  );
};

export default AddMeetup;

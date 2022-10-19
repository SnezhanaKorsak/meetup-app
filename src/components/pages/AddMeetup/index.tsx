import React, { useState } from 'react';
import { Formik, Form } from 'formik';

import Calendar from 'components/Calendar';
import Greeting from 'components/Greeting';

import { AddMeetupSchema } from 'common/validation';
import { getDateWithTime } from 'helpers/index';
import { useAppDispatch } from 'hooks/index';
import { HOME_PAGE_ROUTE } from 'constants/index';

import { Wrapper } from 'components/layouts';
import { Container, ErrorMessage, Label, StyledField, SubmitButton } from './styled';
import { MeetupsFormValues } from './types';
import { addMeetup } from '../../../state/reducers/meetupReducer';
import { Navigate } from 'react-router-dom';

const AddMeetup = () => {
  const dispatch = useAppDispatch();
  const [date, setDate] = useState<Date | null>(new Date());

  const initialValues: MeetupsFormValues = {
    title: '',
    description: '',
    time: '',
    place: '',
    image: '',
  };

  const onSubmitHandler = (values: MeetupsFormValues) => {
    const time = getDateWithTime(values.time, date);
    dispatch(addMeetup({ ...values, time }));
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
            {({ errors, touched, isValidating, isSubmitting }) => (
              <Form>
                {errors.title && touched.title && <ErrorMessage>{errors.title}</ErrorMessage>}
                <StyledField id='title' name='title' placeholder='Title' />

                {errors.description && touched.description && (
                  <ErrorMessage>{errors.description}</ErrorMessage>
                )}
                <StyledField id='description' name='description' placeholder='Description' />

                {errors.place && touched.place && <ErrorMessage>{errors.place}</ErrorMessage>}
                <StyledField id='place' type='text' name='place' placeholder='Place' />

                <StyledField id='image' type='text' name='image' placeholder='Image URL' />

                {errors.time && touched.time && <ErrorMessage>{errors.time}</ErrorMessage>}
                <Label htmlFor='time'>Time</Label>
                <StyledField id='time' name='time' type='time' />

                <SubmitButton type='submit' disabled={isValidating}>
                  Submit
                </SubmitButton>

                {isSubmitting && <Navigate to={HOME_PAGE_ROUTE} />}
              </Form>
            )}
          </Formik>
        </Container>
      </Wrapper>
    </>
  );
};

export default AddMeetup;

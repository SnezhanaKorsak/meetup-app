import React, { useLayoutEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Formik } from 'formik';

import { meetupService } from 'api/meetup-api';
import { EDIT_MEETUP, HOME_PAGE_ROUTE } from 'constants/index';
import { AddMeetupSchema } from 'common/validation';

import { EditForm } from './styled';
import { ErrorMessage, Label, StyledField, SubmitButton } from '../pages/AddMeetup/styled';
import { Meetup } from 'types/meetyps';

type EditFormValues = Omit<Meetup, 'id' | 'user_id'>;

const EditMeetup = () => {
  const params = useLocation();
  const meetupId = params.pathname.split(EDIT_MEETUP)[1];

  const [initialValues, setInitialValues] = useState<EditFormValues | null>(null);

  useLayoutEffect(() => {
    meetupService.getMeetupById(meetupId).then((res) => {
      const { id, user_id, ...values } = res.data;
      setInitialValues(values);
    });
  }, []);

  const onSubmitHandler = async (values: EditFormValues) => {
    await meetupService.updateMeetup(meetupId, values);
  };

  if (!initialValues) {
    return null;
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={AddMeetupSchema}
    >
      {({ errors, touched, isValidating, isSubmitting }) => (
        <EditForm>
          {errors.title && touched.title && <ErrorMessage>{errors.title}</ErrorMessage>}
          <Label htmlFor='title'>Title</Label>
          <StyledField id='title' name='title' />

          {errors.description && touched.description && (
            <ErrorMessage>{errors.description}</ErrorMessage>
          )}
          <Label htmlFor='description'>Description</Label>
          <StyledField id='description' name='description' />

          {errors.place && touched.place && <ErrorMessage>{errors.place}</ErrorMessage>}
          <Label htmlFor='place'>Place</Label>
          <StyledField id='place' type='text' name='place' />

          <Label htmlFor='image'>Image URL</Label>
          <StyledField id='image' type='text' name='image' />

          {errors.time && touched.time && <ErrorMessage>{errors.time}</ErrorMessage>}
          <Label htmlFor='time'>Time</Label>
          <StyledField id='time' name='time' />

          <SubmitButton type='submit' disabled={isValidating}>
            Submit
          </SubmitButton>

          {isSubmitting && <Navigate to={HOME_PAGE_ROUTE} />}
        </EditForm>
      )}
    </Formik>
  );
};

export default EditMeetup;

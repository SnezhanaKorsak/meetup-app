import * as Yup from 'yup';

export const AddMeetupSchema = Yup.object({
  title: Yup.string()
    .max(80, 'The title should be no more than 80 characters')
    .required('The field is required'),
  description: Yup.string().max(100, 'Too Long!').required('The field is required'),
  place: Yup.string().max(100, 'Too Long!').required('The field is required'),
  time: Yup.string().required('The field is required'),
});

export const LoginSchema = Yup.object({
  email: Yup.string().email('Email is invalid').required('The field is required'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters')
    .required('The field is required'),
});

export const RegistrationSchema = Yup.object({
  name: Yup.string()
    .max(15, 'The title should be no more than 15 characters')
    .required('The field is required'),
  email: Yup.string().email('Email is invalid').required('The field is required'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters')
    .required('The field is required'),
});

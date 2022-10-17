import * as Yup from 'yup';

export const AddMeetupSchema = Yup.object({
  title: Yup.string()
    .max(80, 'The title should be no more than 80 characters')
    .required('The field is required'),
  description: Yup.string().max(100, 'Too Long!').required('The field is required'),
  place: Yup.string().max(100, 'Too Long!').required('The field is required'),
  time: Yup.string().required('The field is required'),
  image: Yup.string().required('The field is required'),
});

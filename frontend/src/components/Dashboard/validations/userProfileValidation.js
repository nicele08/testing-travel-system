import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  firstName: Yup.string('First name must be a string')
    .trim()
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g, 'Invalid name'),
  email: Yup.string()
    .email('Enter valid email Address')
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim,
      'Input valid email',
    ),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g, 'Invalid name'),
  profilePicture: Yup.mixed(),
})
export default validationSchema

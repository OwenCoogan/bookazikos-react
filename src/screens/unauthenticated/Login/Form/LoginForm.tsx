import { useUserActions } from '../../../../store/actions/user.actions';
import TextInput from '../../../../components/design-system/TextInput';
import { Formik,Form } from 'formik';
import { validationSchema } from './LoginForm.validation';
import FormWrapper from '../../../../components/design-system/form/FormWrapper';

type LoginFormInputType = {
  email : string;
  password : string;
}



export default function LoginForm(){
  const initialValues: LoginFormInputType = {
    email: '',
    password: '',
  }
  const userActions = useUserActions();
  return (
    <FormWrapper>
    <Formik
         initialValues={initialValues}
        validationSchema={validationSchema}
         onSubmit={(values, actions) => {
          userActions.login(values);
         }}
       >
        {({ errors, touched, isSubmitting, setFieldValue,values }) => {
          return (
    <Form>
      <TextInput
        label="Email"
        inputName="email"
        type="email"
        value={values.email}
        placeholder="Enter your email"
        error={errors.email}
        onChange={(event) => {
          setFieldValue('email', event.target.value);
        }}

      />
      <TextInput
        label="Password"
        inputName="password"
        type="password"
        value={values.password}
        placeholder="Enter your password"
        error={errors.password}
        onChange={(event) => {
          setFieldValue('password', event.target.value);
        }}
      />

<button
        type="submit"
        className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'
      >
        Submit
      </button>
    </Form>
)
}}
</Formik>
</FormWrapper>
)}

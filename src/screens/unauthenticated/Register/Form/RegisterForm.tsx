import axios from 'axios';
import { Formik,Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormWrapper from '../../../../components/design-system/form/FormWrapper';
import TextInput from '../../../../components/design-system/TextInput';
import { validationSchema } from './RegisterForm.validation';

type RegisterFormInputType = {
  email : string;
  firstName : string;
  lastName : string;
  password : string;
}

export default function RegisterForm(){
  const initialValues: RegisterFormInputType = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  }
  const navigate = useNavigate();

  const submitMethod = (values: RegisterFormInputType) => {
    axios.post('http://localhost:6950/auth/register', values)
      .then((res) => {
        if(!res.data.errorCode){
          toast.success(`You have successfully registered ${values.firstName} ${values.lastName}`, );
          navigate('/login');
        }
      else {
        toast.error(res.data.errorCode);
      }
      }
      )
      .catch((error) => {
        toast.error('Something went wrong');
      }
      )
  }
  return (
    <FormWrapper>
    <Formik
         initialValues={initialValues}
        validationSchema={validationSchema}
         onSubmit={(values, actions) => {
          submitMethod(values)
         }}
       >
        {({ errors, touched, isSubmitting, setFieldValue,values }) => {
          return (
    <Form>
      <TextInput
        label="Email"
        inputName="email"
        type="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={(event) => {
          setFieldValue('email', event.target.value);
        }}

      />
      <TextInput
        label="First Name"
        inputName="firstName"
        type="text"
        placeholder="Enter your first name"
        value={values.firstName}
        onChange={(event) => {
          setFieldValue('firstName', event.target.value);
        }}
      />
      <TextInput
        label="Last Name"
        inputName="lastName"
        type="text"
        placeholder="Enter your last name"
        value={values.lastName}
        onChange={(event) => {
          setFieldValue('lastName', event.target.value);
        }}
      />
      <TextInput
        label="Password"
        inputName="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
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
}
}
    </Formik>
    </FormWrapper>
)
}

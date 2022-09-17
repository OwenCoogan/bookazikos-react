import axios from 'axios';
import { toast } from 'react-toastify';
import Form from '../../../../design-system/form/Form';
import TextInput from '../../../../design-system/TextInput';

type RegisterFormInputType = {
  email : string;
  firstName : string;
  lastName : string;
  password : string;
}

export default function RegisterForm(){
  const values: RegisterFormInputType = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  }
  const submitMethod = (values: RegisterFormInputType) => {
    axios.post('http://localhost:6950/auth/register', values)
      .then((response) => {
        console.log(response);
        toast.success('You have successfully registered');
      }
      )
      .catch((error) => {
        toast.error('Something went wrong');
      }
      )
  }
  return (
    <Form
      initialValues={values}
      submitMethod={ (values: RegisterFormInputType) => submitMethod(values) }
      validationSchema={{}}
    >
      <TextInput
        label="Email"
        inputName="email"
        type="email"
        placeholder="Enter your email"
        onChange={(event) => {
          values.email = event.target.value;
        }}

      />
      <TextInput
        label="First Name"
        inputName="firstName"
        type="text"
        placeholder="Enter your first name"
        onChange={(event) => {
          values.firstName = event.target.value;
        }}
      />
      <TextInput
        label="Last Name"
        inputName="lastName"
        type="text"
        placeholder="Enter your last name"
        onChange={(event) => {
          values.lastName = event.target.value;
        }}
      />
      <TextInput
        label="Password"
        inputName="password"
        type="password"
        placeholder="Enter your password"
        onChange={(event) => {
          values.password = event.target.value;
        }}
      />
    </Form>
)
}

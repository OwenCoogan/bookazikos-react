import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from '../../../../components/design-system/form/Form';
import TextInput from '../../../../components/design-system/TextInput';

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
  const navigate = useNavigate();

  const submitMethod = (values: RegisterFormInputType) => {
    axios.post('http://localhost:6950/auth/register', values)
      .then(() => {
        toast.success(`You have successfully registered ${values.firstName} ${values.lastName}`, );
        navigate('/login');
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

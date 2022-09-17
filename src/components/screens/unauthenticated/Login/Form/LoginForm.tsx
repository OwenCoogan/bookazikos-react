import axios from 'axios';
import Form from '../../../../design-system/form/Form';
import TextInput from '../../../../design-system/TextInput';

type LoginFormInputType = {
  email : string;
  password : string;
}



export default function LoginForm(){
  const values: LoginFormInputType = {
    email: '',
    password: '',
  }
  const submitMethod = (values: LoginFormInputType) => {
    axios.post('http://localhost:6950/auth/login', values)
      .then((response) => {
        console.log(response);
      }
      )
  }
  return (
    <Form
      initialValues={values}
      submitMethod={ (values: LoginFormInputType) => submitMethod(values) }
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

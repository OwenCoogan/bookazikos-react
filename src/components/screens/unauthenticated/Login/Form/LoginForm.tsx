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
  return (
    <Form
      initialValues={values}
      onSubmit={(values) => {}
      }
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

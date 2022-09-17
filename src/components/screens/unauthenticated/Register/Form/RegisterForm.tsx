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
  return (
    <h1>
      Hello {values.email}
    </h1>
)
}

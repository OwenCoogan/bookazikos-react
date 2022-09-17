import FormHeader from '../../../design-system/FormHeader';
import LoginForm from './Form/LoginForm';


export default function Login(

){
  return (
    <div>
      <FormHeader
        title="Log into your account"
        subtitle="Register for an account"
        route="/register"
      />
      <LoginForm />
    </div>
  )
}

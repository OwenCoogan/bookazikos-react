import FormHeader from '../../../design-system/FormHeader';
import RegisterForm from './Form/RegisterForm';

export default function Register(

){
  return (
    <div>
      <FormHeader
        title="Create an account"
        subtitle="Already have an account?"
        route="/login"
      />
      <RegisterForm />
    </div>
  )
}

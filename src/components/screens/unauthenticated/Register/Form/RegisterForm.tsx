import { Formik } from 'formik';
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
  return (
    <Formik 
       initialValues={values}
       validate={values => {
         const errors = {
            email: '',
            firstName: '',
            lastName: '',
            password: ''
         };
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
      {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
        <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
          onSubmit={handleSubmit}
        >
          <TextInput
            label="Email"
            inputName="email"
            type="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
          />
          <TextInput
            label="First Name"
            inputName="firstName"
            type="text"
            placeholder="Enter your first name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.firstName}
          />
          <TextInput
            label="Last Name"
            inputName="lastName"
            type="text"
            placeholder="Enter your last name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.lastName}
          />
          <TextInput
            label="Password"
            inputName="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
          />
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </div>
        </form>
        </div>
       )}
     </Formik>
)
}

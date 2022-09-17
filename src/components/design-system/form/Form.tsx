import { Formik } from 'formik';
import TextInput from '../TextInput';


type FormInputType = {
  email : string;
  password : string;
}

export default function Form() {
  const values: FormInputType = {
    email: '',
    password: '',
  }
  return (
    <Formik 
       initialValues={values}
       validate={values => {
         const errors = {
            email: '',
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
        </form>
        </div>
       )}
     </Formik>

  )
}

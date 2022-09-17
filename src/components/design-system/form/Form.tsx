import { Formik , Form as FormikForm , ErrorMessage } from 'formik';

type FormProps = {
  initialValues: any;
  onSubmit: (values: any) => void;
  validationSchema: any;
  children: any;
}

export default function Form({
  children,
  initialValues,
}: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <FormikForm>
        {children}
        <button
          type="submit"
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Submit
        </button>
      </FormikForm>
    </Formik>
  )

}

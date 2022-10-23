import { Formik , Form as FormikForm  } from 'formik';

type FormProps = {
  initialValues: any;
  submitMethod: any;
  validationSchema: any;
  children: any;
  style?: string;
}

export default function Form({
  children,
  initialValues,
  submitMethod,
  validationSchema,
  style
}: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitMethod}
      enableReinitialize={true}
    >
      <FormikForm
        className="w-full m-auto"
      >
        {children}
        <button
          type="submit"
          className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'
        >
          Submit
        </button>
      </FormikForm>
    </Formik>
  )
}

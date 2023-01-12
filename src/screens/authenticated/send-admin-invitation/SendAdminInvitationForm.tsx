import { Formik } from 'formik';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from '../../../components/design-system/form/Form';
import FormWrapper from '../../../components/design-system/form/FormWrapper';
import TextInput from '../../../components/design-system/TextInput';
import { sendAdminInvitationMutation } from '../../../store/actions/send-emails/admin-invitation';

export default function SendAdminInvitationForm({
}) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [email, setEmail] = useState('');

  const initialValues = {
    email: email || '',
  }

  const mutation = useMutation(
    (values:any) =>
    sendAdminInvitationMutation({
      email: values.email
    }),
  )

  return (
    <FormWrapper>
    <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
            console.log(values)
            mutation.mutate({
              email: values.email
            })
         }}
       >
        {({ touched, isSubmitting, setFieldValue,values }) => {
          return (
            <Form
              initialValues={initialValues}
              validationSchema={null}
              submitMethod={(values:any) => {
                console.log(values)
                mutation.mutate({
                  email: values.email
                })
              }}
            >
              <TextInput
                label="Email"
                type="email"
                inputName='email'
                placeholder="Email"
                value={values.email}
                onChange={(e:any) => {
                  setFieldValue('email', e.target.value)
                  setEmail(e.target.value)
                }}
              />
            </Form>
          )
        }}

    </Formik>
    </FormWrapper>
  );

}


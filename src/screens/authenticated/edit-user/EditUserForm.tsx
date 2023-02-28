import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TextInput from '../../../components/design-system/TextInput';
import { useState } from 'react';
import { Formik,Form } from 'formik';
import { editUserMutation } from '../../../store/queries/users/auth';
import { useMutation, useQueryClient } from 'react-query';
import ImageInput from '../../../components/design-system/ImageInput';
import FormWrapper from '../../../components/design-system/form/FormWrapper';

type EditUserPropType = {
  firstName?: string;
  lastName?: string;
  userId: string;
  description?: string;
  occupation?: string;
}


export default function EditUserForm({
  firstName,
  lastName,
  description,
  occupation,
  userId,
}:EditUserPropType) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const initialValues = {
    firstName: firstName || '',
    lastName: lastName || '',
    description: description || '',
    occupation: occupation || '',
    image:  {} as File,
  }


  const mutation = useMutation(
    (values:typeof initialValues) =>
      editUserMutation(userId, values.image , values.firstName, values.lastName, values.description, values.occupation),
      {
        onSuccess(data) {
          queryClient.invalidateQueries('get-single-user');
          toast.success('User updated successfully');
          navigate('/user-settings');
        },
        onError(error: any) {
          toast.error(error.message);
        }
      }
  );
  return (
    <FormWrapper>
    <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
          mutation.mutate(values)
         }}
       >
        {({ touched, isSubmitting, setFieldValue,values }) => {
          return (
            <Form>
              <input
                type="file"
                name="myImage"
                onChange={(event) => {

                  setFieldValue("image",event.target.files![0]);
                  console.log(values)
                }}
              />
              <TextInput
                inputName="firstName"
                placeholder='First Name'
                label="First Name"
                type="text"
                value={values.firstName}
                onChange={(e) => setFieldValue('firstName', e.target.value)}
              />
              <TextInput
                inputName="lastName"
                placeholder='Last Name'
                label="Last Name"
                type="text"
                value={values.lastName}
                onChange={(e) => setFieldValue('lastName', e.target.value)}
              />
              <TextInput
                inputName="description"
                placeholder='Description'
                label="Description"
                type="text"
                value={values.description}
                onChange={(e) => setFieldValue('description', e.target.value)}
              />
              <TextInput
                inputName="occupation"
                placeholder='Occupation'
                label="Occupation"
                type="text"
                value={values.occupation}
                onChange={(e) => setFieldValue('occupation', e.target.value)}
              />
              <button
                type="submit"
                className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'
              >
                Submit
              </button>
            </Form>
          )
        }}

    </Formik>
    </FormWrapper>
  );

}



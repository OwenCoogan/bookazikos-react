import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Form from '../../../components/design-system/form/Form';
import TextInput from '../../../components/design-system/TextInput';
import { useState } from 'react';

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
  const [user , setUser] = useState({
    firstName: firstName || '',
    lastName: lastName || '',
    description: description || '',
    occupation: occupation || '',
  });

  return (
    <Form
      submitMethod={() => {
        console.log(user)
        axios.post(
          `http://localhost:6950/auth/edit-user/${userId}`,
          user,
        )
          .then((res) => {
            toast.success("User updated successfully");
            navigate('/dashboard');

          })
          .catch((err) => {
            toast.error('Something went wrong = ' + err);
          });
      }}
      initialValues={user}
      validationSchema={{}}
    >
      <TextInput
        label="First Name"
        inputName="firstName"
        placeholder="First Name"
        type="text"
        value={user.firstName}
      />
      <TextInput
        label="Last Name"
        inputName="lastName"
        placeholder="Last Name"
        type="text"
        value={user.lastName}
      />
      <TextInput
        label="Occupation"
        inputName="occupation"
        placeholder="Occupation"
        type="text"
        value={user.occupation}
      />
      <TextInput
        label="Description"
        inputName="description"
        placeholder="Description"
        type="text"
        value={user.description}
      />
    </Form>
  );

}



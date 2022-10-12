import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userAtom } from '../../../store';
import axios from 'axios';
import Form from '../../../components/design-system/form/Form';
import TextInput from '../../../components/design-system/TextInput';

type EditUserPropType = {
  firstName?: string;
  lastName?: string;
  userId: string;
  description?: string;
  occupation?: string;
}

export default function EditUserForm() {
  const userState = useRecoilState(userAtom)[0];
  const navigate = useNavigate();
  const initialValues   = {
    firstName: userState.user.userProfile.firstName,
    lastName: userState.user.userProfile.lastName,
    occupation: userState.user.userProfile.occupation,
    userId: userState.user.id,
    description: userState.user.userProfile.description,
    };
  return (
    <Form
      submitMethod={(values : EditUserPropType ) => {
        axios.post(
          `http://localhost:6950/auth/edit-user/${userState.user.id}`,
          values,
        )
          .then((res) => {
            navigate('/dashboard');

          })
          .catch((err) => {
            toast.error('Something went wrong = ' + err);
          });
      }}
      initialValues={initialValues}
      validationSchema={{}}
    >
      <TextInput
        label="First Name"
        inputName="firstName"
        placeholder="First Name"
        type="text"
        onChange={(event) => {
          initialValues.firstName = event.target.value;
        }}
      />
      <TextInput
        label="Last Name"
        inputName="lastName"
        placeholder="Last Name"
        type="text"
        onChange={(event) => {
          initialValues.lastName = event.target.value;
        }}
      />
      <TextInput
        label="Occupation"
        inputName="occupation"
        placeholder="Occupation"
        type="text"
        onChange={(event) => {
          initialValues.occupation = event.target.value;
        }}
      />
      <TextInput
        label="Description"
        inputName="description"
        placeholder="Description"
        type="text"
        onChange={(event) => {
          initialValues.description = event.target.value;
        }}
      />
    </Form>
  );

}



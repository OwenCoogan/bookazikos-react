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
  console.log(userState)
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
        console.log(values)
        axios.post(
          `http://localhost:6950/auth/edit-user/${userState.user.id}`,
          values,
        )
          .then((res) => {
            console.log(res.data);
            navigate('/dashboard');

          })
          .catch((err) => {
            console.log(err);
            toast.error('Something went wrong');
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
          console.log(initialValues)
        }}
      />
      <TextInput
        label="Last Name"
        inputName="lastName"
        placeholder="Last Name"
        type="text"
        onChange={(event) => {
          initialValues.lastName = event.target.value;
          console.log(initialValues)
        }}
      />
      <TextInput
        label="Occupation"
        inputName="occupation"
        placeholder="Occupation"
        type="text"
        onChange={(event) => {
          initialValues.occupation = event.target.value;
          console.log(initialValues)
        }}
      />
      <TextInput
        label="Description"
        inputName="description"
        placeholder="Description"
        type="text"
        onChange={(event) => {
          initialValues.description = event.target.value;
          console.log(initialValues)
        }}
      />
    </Form>
  );

}



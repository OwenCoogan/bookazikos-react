import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../../store';
import { getUserInfoQuery } from '../../../store/queries/users/users';
import EditUserForm from './EditUserForm';

export default function EditUser(){
  const userState = useRecoilState(userAtom)[0];
  const { data,isLoading } = useQuery('get-single-user', () => getUserInfoQuery(userState.user.id));
  console.log(data)
  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <EditUserForm
      firstName={data.userProfile.firstName}
      lastName={data.userProfile.lastName}
      description={data.userProfile.description}
      occupation={data.userProfile.occupation}
      userId={userState.user.id}
    />
  )
}

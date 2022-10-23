import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { authAtom, userAtom } from '../../../../store';
import Avatar from '../../avatar/Avatar';
import DropdownButton from './DropdownButton';
import DropdownLink from './DropdownLink';

type UserDropdownProps = {
  user: any
	draftCount: number;
}

export default function UserDropdown({
  user,
	draftCount
}: UserDropdownProps){
  const [isOpen, setIsOpen] = useState(false);
	const [ auth,setAuth ] = useRecoilState(authAtom);
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

function logout(){
	localStorage.removeItem('token');
	navigate('/');
	toast.success(`Bye bye ${user.firstName}!`);
	setAuth(false);
	setUser({
		authenticated: false,
		isUserProfileCompleted: false,
		user: {
			id: '',
			email: '',
			posts: [],
			userProfile: {
				id: '',
				firstName: '',
				lastName: '',
				occupation: '',
				description: '',
			}
		}
	})
}
  return (
    <div className="align-right">
      <button
        onClick={() =>setIsOpen(!isOpen)}
        className="relative"
      >
        <Avatar
          user={user}
        />
        <div id="userDropdown" className={`${isOpen ===false  && "hidden" } z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 bottom-0 absolute top-10 left-100`}>
        <aside className="w-64" aria-label="Sidebar">
		<div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
			<ul className="space-y-2">
				<DropdownLink
					icon='AiOutlineUser'
					text={user.firstName + ' ' + user.lastName}
					link="/user-settings"
				/>
					<DropdownLink
					icon='AiFillDashboard'
					link='/dashboard'
					text='Dashboard'
					 />
					<DropdownLink
					link='/drafts'
					text='Drafts'
					count={draftCount}
					 />
					<DropdownLink
					icon='AiOutlineFileDone'
					link='/posts'
					text='Post'
					 />
					<DropdownButton
					icon='AiOutlineLogout'
					text='Logout'
					onClick={logout}
					/>
			</ul>
		</div>
	</aside>
      </div>
      </button>
    </div>
  )
}

import { useState } from 'react';
import Avatar from '../../avatar/Avatar';
import NumberBadge from '../../badge/NumberBadge';
import ButtonLink from '../../buttons/ButtonLink';
import DropdownLink from './DropdownLink';

type UserDropdownProps = {
  user: any
  children : React.ReactNode
}

export default function UserDropdown({
  user,
  children
}: UserDropdownProps){
  const [isOpen, setIsOpen] = useState(false);
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
					icon='AiFillBook'
					link='/drafts'
					text='Drafts'
					 />
					<DropdownLink
					icon='AiOutlineFileDone'
					link='/posts'
					text='Post'
					 />
			</ul>
		</div>
	</aside>
      </div>
      </button>
    </div>
  )
}

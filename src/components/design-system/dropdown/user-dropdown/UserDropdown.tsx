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
					text={user.firstName + ' ' + user.lastName}
					icon={<i className="fas fa-user-circle"></i>}
					link="/user-settings"
				/>
					<DropdownLink
					link='/dashboard'
					icon={
						<svg className="w-6 h-6 mr-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
							<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
						</svg>
					}
					text='Dashboard'
					 />
					<DropdownLink
					link='/drafts'
					icon={
						<svg className="w-6 h-6 mr-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
							<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
						</svg>
					}
					text='Drafts'
					 />
					<DropdownLink
					link='/posts'
					icon={
						<svg className="w-6 h-6 mr-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
							<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
						</svg>
					}
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

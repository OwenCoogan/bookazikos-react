import { useState } from 'react';
import Avatar from '../../avatar/Avatar';
import ButtonLink from '../../buttons/ButtonLink';

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
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <Avatar
          user={user}
        />
        <div id="userDropdown" className={`${isOpen != false  && "hidden" } z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 bottom-0 absolute top-10 -right-1/2`}>
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white mt-6">
          <ButtonLink route="/user-settings" text="Add Profile Info"/>
          <div className="font-medium truncate mt-6">{user?.email}</div>
        </div>
        <ul className="py-1 px-2 text-sm text-gray-700 dark:text-gray-200 bg-white" aria-labelledby="avatarButton">
          {children}
        </ul>
      </div>
      </button>

    </div>
  )
}

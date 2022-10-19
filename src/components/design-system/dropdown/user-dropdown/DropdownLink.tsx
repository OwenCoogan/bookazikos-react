import { Link } from 'react-router-dom';
import Icon, { IconNameType } from '../../icon/Icon';

type DropdownLinkProps = {
  text : string;
  link : string;
  icon? : IconNameType;
}

export default function DropdownLink({
  text,
  icon,
  link
}: DropdownLinkProps){
  return (
    <li>
      <Link to={link} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        {
        icon &&
          <Icon
            name={icon}
            size="1.5em"
            color="primary"
          />
        }
        {text}
      </Link>
    </li>
  )
}

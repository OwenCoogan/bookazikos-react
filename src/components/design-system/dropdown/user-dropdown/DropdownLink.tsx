import { Link } from 'react-router-dom';

type DropdownLinkProps = {
  text : string;
  link : string;
}

export default function DropdownLink({
  text,
  link
}: DropdownLinkProps){
  return (
    <li>
      <Link to={link} className="block py-2 px-4 bg-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{text}</Link>
    </li>
  )
}

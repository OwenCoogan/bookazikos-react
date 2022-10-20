import Icon, { IconNameType } from '../../icon/Icon';

type DropdownButtonProps = {
  text : string;
  count?: number;
  onClick?: () => void;
  icon? : IconNameType;
}

export default function DropdownButton({
  text,
  icon,
  onClick,
}: DropdownButtonProps){
  return (
    <li>
      <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" onClick={onClick}>
        {
        icon &&
          <Icon
            name={icon}
            size="1.5em"
            color="primary"
          />
        }
        {text}
      </button>
    </li>
  )
}

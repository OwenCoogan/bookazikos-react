import * as icons from 'react-icons/ai'
import { theme } from '../theme';

export type IconNameType = keyof typeof icons

type IconTypes = {
  name: IconNameType;
  size?: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
}

export default function Icon({
  name = 'AiOutlineUser',
  size = '1em',
  color = 'primary',
}: IconTypes) {
  const Icon = icons[name]
  return (
    <div
      className='px-3'
    >
      <Icon size={size} color={theme.extend.colors[color][900]} className={``}/>
    </div>
  )
}

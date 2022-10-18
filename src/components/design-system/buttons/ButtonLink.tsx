import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonPropsType = {
  icon?: boolean,
  iconPosition?: 'left' | 'right',
  iconSize?: 'small' | 'medium' | 'large',
  text?: string,
  route: string
}

export default function ButtonLink({
  text,
  route
}: ButtonPropsType) {
  return (
    <Link to={route} className="focus:outline-none text-white bg-black hover:bg-gray-900 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900">{text}</Link>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../@types';

export type ButtonPropsType = {
  icon?: boolean,
  iconPosition?: 'left' | 'right',
  iconSize?: 'small' | 'medium' | 'large',
  text?: string,
  route: Routes
}

export default function ButtonLink({
  text,
  route
}: ButtonPropsType) {
  return (
    <Link to={route} className="focus:outline-none text-white bg-black hover:bg-gray-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900">{text}</Link>
  )
}

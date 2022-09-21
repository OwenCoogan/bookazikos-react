import React from 'react';

export type ButtonPropsType = {
  icon?: boolean,
  iconPosition?: 'left' | 'right',
  iconSize?: 'small' | 'medium' | 'large',
  text?: string,
  onClick?: () => void,
}

export default function Button({
  text,
}: ButtonPropsType) {
  return (
    <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">{text}</button>
  )
}

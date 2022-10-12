import React from 'react';

export type ButtonPropsType = {
  icon?: boolean,
  size?: 'small' | 'medium' | 'large',
  iconPosition?: 'left' | 'right',
  iconSize?: 'small' | 'medium' | 'large',
  text?: string,
  onClick?: () => void,
}

export default function Button({
  text,
  size = 'small',
}: ButtonPropsType) {

  const sizes = {
    small: 'h-8 px-2 text-sm',
    medium: 'h-10 px-4 text-base',
    large: 'h-12 px-6 text-lg',
  }

  return (
    <button type="button" className={`focus:outline-none ${sizes[size]} text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900`}>{text}</button>
  )
}

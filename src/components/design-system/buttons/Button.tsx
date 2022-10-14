import React from 'react';

export type ButtonPropsType = {
  icon?: boolean,
  size?: 'small' | 'medium' | 'large',
  iconPosition?: 'left' | 'right',
  iconSize?: 'small' | 'medium' | 'large',
  children?: React.ReactNode,
  onClick?: () => void,
}

export default function Button({
  children,
  size = 'small',
  onClick
}: ButtonPropsType) {

  const sizes = {
    small: 'px-2 text-sm',
    medium: 'px-4 text-base',
    large: ' px-6 text-lg',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus:outline-none ${sizes[size]} text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900`}>
        {children}
    </button>
  )
}

import React from 'react';

export type ButtonPropsType = {
  icon?: boolean,
  color: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
  size?: 'small' | 'medium' | 'large',
  iconPosition?: 'left' | 'right',
  iconSize?: 'small' | 'medium' | 'large',
  children?: React.ReactNode,
  onClick?: any,
}

export default function Button({
  children,
  size = 'small',
  color,
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
      className={`${sizes[size]} text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 max-h-20 my-auto mr-2 dark:bg-${color}-600 dark:hover:bg-${color}-700 focus:outline-none dark:focus:ring-${color}-800`}>
        {children}
    </button>
  )
}

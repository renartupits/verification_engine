import { ButtonHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({fullWidth, disabled, onClick, children, ...rest}: ButtonProps) => {
  const buttonClassNames = classNames('px-3 py-2 rounded text-sm font-medium text-white transition-colors duration-150 ease-in-out', {
    'bg-primary hover:bg-primary-hover': !disabled,
    'bg-primary-disabled cursor-not-allowed': disabled,
    'w-full': fullWidth
  })

  return (
    <button
      {...rest}
      disabled={disabled}
      className={buttonClassNames}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

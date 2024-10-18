import classNames from 'classnames'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface CheckProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  position?: number;
  inGroup?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export const Check = ({selected, position, inGroup = true, disabled, onClick, children}: CheckProps) => {
  const checkClassNames = classNames('px-4 py-1 text-sm border rounded font-medium transition-colors duration-150 ease-in-out', {
    'border-primary': !disabled,

    'border-check-disabledGray text-check-disabledText bg-check-disabledGray cursor-not-allowed': selected && disabled,
    'border-check-disabledGray text-check-disabledText bg-white cursor-not-allowed': !selected && disabled,

    'text-white bg-primary hover:bg-primary-hover': selected && !disabled,
    'hover:bg-customGradient': !selected && !disabled,

    'text-primary bg-white focus:ring focus:ring-check-borderFocus': !selected && !disabled,
    'text-white focus:ring focus:ring-check-borderFocus': selected && !disabled,

    'rounded-r-none': inGroup && position === 1,
    'border-l-0 rounded-l-none': inGroup && position === 2,


  })

  return (
    <button
      className={checkClassNames}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}


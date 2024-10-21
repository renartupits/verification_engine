import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  children: ReactNode;
}

function Button({
  fullWidth, disabled, onClick, children, ...rest
}: ButtonProps) {
  const buttonClassNames = classNames(
    'px-3 py-2 rounded text-sm font-medium text-white transition-colors duration-150 ease-in-out focus:border focus:border-white focus:outline focus:outline-primary',
    {
      'bg-primary hover:bg-primary-hover': !disabled,
      'bg-primary-disabled cursor-not-allowed': disabled,
      'w-full': fullWidth,
    },
  );

  return (
    <button
      type="button"
      disabled={disabled}
      className={buttonClassNames}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;

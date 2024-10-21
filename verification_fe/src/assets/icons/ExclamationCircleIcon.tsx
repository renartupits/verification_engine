interface ExclamationCircleIconProps {
  classNames?: string;
}

function ExclamationCircleIcon({ classNames }: ExclamationCircleIconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1.5em"
      width="1.5em"
      className={classNames}
    >
      <path d="M7.005 3.1a1 1 0 111.99 0l-.388 6.35a.61.61 0 01-1.214 0L7.005 3.1zM7 12a1 1 0 112 0 1 1 0 01-2 0z" />
    </svg>
  );
}

export default ExclamationCircleIcon;

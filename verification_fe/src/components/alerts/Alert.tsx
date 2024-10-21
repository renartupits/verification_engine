import ExclamationCircleIcon from '../../assets/icons/ExclamationCircleIcon.tsx';

interface AlertProps {
  message?: string;
}

function Alert({ message }: AlertProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="shadow px-1 py-0.5 rounded relative flex h-[30px]" role="alert">
        <div className="flex items-center bg-red-400 rounded-lg">
          <ExclamationCircleIcon classNames="fill-white" />
        </div>
        <div className="flex-1 flex items-center justify-between ml-1">
          <span className="text-sm">{message}</span>
        </div>
      </div>
    </div>
  );
}

export default Alert;

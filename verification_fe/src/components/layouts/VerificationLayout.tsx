import { ReactNode } from 'react';

interface VerificationContainerProps {
  children: ReactNode;
}

function VerificationLayout({ children }: VerificationContainerProps) {
  return (
    <div className="flex min-h-screen items-start justify-center p-4 font-inter lg:items-center">
      <div className="flex w-full justify-center border shadow-md min-h-[476px] min-w-[370px] lg:w-fit rounded">
        {children}
      </div>
    </div>
  );
}

export default VerificationLayout;

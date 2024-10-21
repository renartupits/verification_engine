import { ReactNode } from 'react';

interface VerificationContainerProps {
  children: ReactNode;
}

function VerificationLayout({ children }: VerificationContainerProps) {
  return (
    <div className="flex min-h-screen items-start justify-center p-4 font-inter lg:items-center">
      <div className="flex w-full flex-col justify-between border min-h-[476px] min-w-[370px] lg:w-fit lg:shadow">
        {children}
      </div>
    </div>
  );
}

export default VerificationLayout;

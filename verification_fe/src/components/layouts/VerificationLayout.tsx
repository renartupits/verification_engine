import { ReactNode } from 'react'

interface VerificationContainerProps {
  children: ReactNode;
}

export const VerificationLayout = ({children}: VerificationContainerProps) => {
  return (
    // @TODO Handle mobile layout
    <div className="flex min-h-screen items-center justify-center space-y-6 font-inter">
      <div className="flex w-fit flex-col justify-between border shadow min-h-[476px] min-w-[370px]">
        {children}
      </div>
    </div>
  )
}

import React, { PropsWithChildren } from 'react'

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen min-w-screen  h-full flex flex-col items-center justify-center">
      {children}
    </div>
  )
}

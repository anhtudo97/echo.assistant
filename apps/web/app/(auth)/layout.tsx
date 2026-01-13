import React, { PropsWithChildren } from 'react'

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen min-w-screen  h-full flex flex-col items-center justify-center">
      {children}
    </div>
  )
}

export default layout
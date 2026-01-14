import { AuthLayout } from '@/modules/auth/ui/layouts/auth-layout'
import React, { PropsWithChildren } from 'react'

const layout = ({ children }: PropsWithChildren) => {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  )
}

export default layout
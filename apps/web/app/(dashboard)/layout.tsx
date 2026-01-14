import AuthGuard from '@/modules/auth/ui/components/auth-guard'
import React, { PropsWithChildren } from 'react'

const layout = ({ children }: PropsWithChildren) => {
  return (
    <AuthGuard>{children}</AuthGuard>
  )
}

export default layout
"use client"

import { useOrganization } from '@clerk/nextjs'
import { PropsWithChildren } from 'react'
import { AuthLayout } from '@/modules/auth/ui/layouts/auth-layout'
import { OrganizationSelectionView } from '@/modules/auth/ui/views/organization-selection-view'

const OrganizationGuard = ({ children }: PropsWithChildren) => {
  const { organization } = useOrganization()

  if (!organization) {
    return (
      <AuthLayout>
        <OrganizationSelectionView />
      </AuthLayout>
    )
  }

  return (
    <div>{children}</div>
  )
}

export default OrganizationGuard
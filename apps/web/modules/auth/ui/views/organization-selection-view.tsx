import { OrganizationList } from '@clerk/nextjs'
import React from 'react'

export const OrganizationSelectionView = () => {
  return (
    <OrganizationList
      afterSelectOrganizationUrl={'/'}
      afterSelectPersonalUrl={'/'}
      hidePersonal
      skipInvitationScreen
    />

  )
}

import DashboardLayout from '@/modules/dashboard/ui/layouts/dashboard-layout'
import { PropsWithChildren } from 'react'

const layout = ({ children }: PropsWithChildren) => {
  return (
    <DashboardLayout>{children}</DashboardLayout>
  )
}

export default layout
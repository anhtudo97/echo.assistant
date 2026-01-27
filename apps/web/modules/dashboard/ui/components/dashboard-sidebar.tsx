"use client"

import React from 'react'
import { InboxIcon, LibraryBigIcon, } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from '@workspace/ui/components/sidebar'
import { OrganizationSwitcher } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const customerSupportItems = [
  {
    title: "Conversations",
    url: "/conversations",
    icon: InboxIcon
  },
  {
    title: "Knowledge Base",
    url: "/files",
    icon: LibraryBigIcon
  }
]

const DashboardSidebar = () => {
  const pathname = usePathname()

  const isActive = (url: string) => {
    if (url === "/") {
      return pathname === url
    }
    return pathname.startsWith(url)
  }
  return (
    <Sidebar className='group' collapsible='icon' >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size={'lg'}>
              <OrganizationSwitcher hidePersonal skipInvitationScreen />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Customer Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {
                customerSupportItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={isActive(item.url)}
                    >
                      <Link href={item.url}>
                        <item.icon className='size-4' />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail /> 
    </Sidebar>
  )
}

export default DashboardSidebar
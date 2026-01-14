"use client"

import { Authenticated, AuthLoading, Unauthenticated } from 'convex/react'
import React, { PropsWithChildren } from 'react'
import { AuthLayout } from '../layouts/auth-layout'
import { SignInView } from '../views/sign-in-view'

const AuthGuard = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <div>Loading...</div>
        </AuthLayout>
      </AuthLoading>
      <Authenticated>
        {children}
      </Authenticated>
      <Unauthenticated>
        <AuthLoading>
          <AuthLayout>
            <SignInView />
          </AuthLayout>
        </AuthLoading>
      </Unauthenticated>
    </>
  )
}

export default AuthGuard
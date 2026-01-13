"use client"

import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"
import { useMutation, useQuery } from "convex/react"

export default function Page() {
  const users = useQuery(api.users.getMany, {})
  const add = useMutation(api.users.create)
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World app/widget</h1>
        <Button size="sm" onClick={() => add()}>Add user</Button>
        <div className="max-w-sm w-full mx-auto gap-y-4 flex flex-col">

          {JSON.stringify(users, null, 2)}
        </div>
      </div>
    </div>
  )
}

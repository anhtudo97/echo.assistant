"use client"

import { useVapi } from "@/modules/widget/hooks/use-vapi"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"
import { useMutation, useQuery } from "convex/react"

export default function Page() {
  const users = useQuery(api.users.getMany, {})
  const add = useMutation(api.users.create)

  const { startCall, endCall, isConnected, isConnecting, isSpeaking, transcript } = useVapi()
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World app/widget</h1>
        <Button size="sm" onClick={() => add()}>Add user</Button>
        <div className="max-w-sm w-full mx-auto gap-y-4 flex flex-col">

          {JSON.stringify(users, null, 2)}
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4">
        <Button size="sm" onClick={startCall}>Start Call</Button>
        <Button size="sm" onClick={endCall}>End Call</Button>

        <p>
          isConnected: {isConnected ? "Yes" : "No"}
        </p>
        <p>
          isConnecting: {isConnecting ? "Yes" : "No"}
        </p>
        <p>
          isSpeaking: {isSpeaking ? "Yes" : "No"}
        </p>
        <p>
          Transcript: {transcript.map((t, index) => (<div key={index}><strong>{t.role}:</strong> {t.text}</div>))}
        </p>
      </div>
    </div>
  )
}

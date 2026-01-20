import Vapi from '@vapi-ai/web'
import { useEffect, useState } from 'react'

interface TranscriptMessage {
  role: 'user' | 'assistant'
  text: string
}

export const useVapi = () => {
  const [vapi, setVapi] = useState<Vapi | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([])

  useEffect(() => {
    // Only for testing purposes
    const vapiInstance = new Vapi("cb910dea-60c3-4234-9feb-9caa17b451c9")
    setVapi(vapiInstance)

    vapiInstance.on('call-start', () => {
      setIsConnected(true)
      setIsConnecting(false)
      setTranscript([])
    })

    vapiInstance.on('call-end', () => {
      setIsConnected(false)
      setIsConnecting(false)
      setIsSpeaking(false)
    })

    vapiInstance.on("speech-start", () => {
      setIsSpeaking(true)
    })

    vapiInstance.on("speech-end", () => {
      setIsSpeaking(false)
    })

    vapiInstance.on("error", (error) => {
      console.error("VAPI Error:", error)
      setIsConnecting(false)
    })

    vapiInstance.on("message", (message) => {

      if (message.type === "transcript" && message.transcriptType === "final") {
        setTranscript((prev) => [...prev, {
          role: message.role === "user" ? 'user' : 'assistant',
          text: message.transcript
        }])
      }
    })


    return () => {
      vapiInstance?.stop()
    }
  }, [])

  const startCall = () => {
    setIsConnecting(true)

    if (vapi) {
      // Only for testing purposes
      vapi.start("38472a2f-bcf6-425d-acaa-5be53edbb72a")
    }
  }

  const endCall = () => {
    if (vapi) {
      vapi.stop()
    }
  }

  return {
    isConnected,
    isConnecting,
    isSpeaking,
    transcript,
    startCall,
    endCall
  }
}
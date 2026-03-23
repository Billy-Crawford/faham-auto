"use client"

import { useMessages } from "@/hooks/useMessages"
import MessageInput from "./MessageInput"
import { useState, useEffect } from "react"

export default function ChatWindow({
  conversation,
  onBack,
}: any) {

  const { setUnreadCount } = useMessages()

  const [messages, setMessages] = useState([
    { text: "Hello!", fromMe: true },
    { text: "Hi 👋", fromMe: false },
  ])

  // 🔥 Marquer comme lus quand on ouvre une conversation
  useEffect(() => {
    if (conversation) {
      setUnreadCount(0)
    }
  }, [conversation, setUnreadCount])

  // 🔒 Aucun chat sélectionné
  if (!conversation) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Select a conversation
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">

      {/* Header */}
      <div className="p-4 border-b flex items-center gap-4">

        {/* 🔙 MOBILE BACK */}
        {onBack && (
          <button onClick={onBack} className="md:hidden text-xl">
            ←
          </button>
        )}

        <span className="font-semibold">
          {conversation.name}
        </span>

      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs p-2 rounded-lg ${
              msg.fromMe
                ? "bg-indigo-600 text-white ml-auto"
                : "bg-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}

      </div>

      {/* Input */}
      <MessageInput setMessages={setMessages} />

    </div>
  )
}
"use client"

import { useState } from "react"

export default function MessageInput({ setMessages }: any) {

  const [text, setText] = useState("")

  const sendMessage = () => {
    if (!text.trim()) return

    setMessages((prev: any) => [
      ...prev,
      { text, fromMe: true }
    ])

    setText("")
  }

  return (
    <div className="p-4 border-t flex gap-2">

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border p-2 rounded"
      />

      <button
        onClick={sendMessage}
        className="bg-indigo-600 text-white px-4 rounded"
      >
        Send
      </button>

    </div>
  )
}


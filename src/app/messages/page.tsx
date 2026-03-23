"use client"

import { useState } from "react"
import ConversationList from "../../components/ConversationList"
import ChatWindow from "../../components/ChatWindow"

export default function MessagesPage() {

  const [selected, setSelected] = useState<any>(null)

  return (
    <main className="h-[calc(100vh-80px)] flex">

      {/* 📱 MOBILE */}
      <div className="w-full md:hidden">

        {!selected ? (
          <ConversationList onSelect={setSelected} />
        ) : (
          <ChatWindow
            conversation={selected}
            onBack={() => setSelected(null)}
          />
        )}

      </div>

      {/* 🖥 DESKTOP */}
      <div className="hidden md:flex w-full">

        <div className="w-1/3 border-r">
          <ConversationList onSelect={setSelected} />
        </div>

        <div className="flex-1">
          <ChatWindow conversation={selected} />
        </div>

      </div>

    </main>
  )
}


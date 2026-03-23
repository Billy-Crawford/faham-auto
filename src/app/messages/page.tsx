"use client";

import { useState } from "react";
import ConversationList from "../../components/ConversationList";
import ChatWindow from "../../components/ChatWindow";
import PageHeader from "@/components/PageHeader";
import AuthGuard from "@/components/AuthGuard";

export default function MessagesPage() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <AuthGuard>
      <main className="h-[calc(100vh-80px)] flex flex-col">
        {/* 🔥 HEADER EN HAUT */}
        <div className="px-6 md:px-10 pt-6 pb-6">
          <PageHeader title="Messages" />

          <hr className="mt-4 border-gray-200" />
        </div>

        {/* 🔥 CONTENU */}
        <div className="flex-1 flex overflow-hidden">
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
        </div>
      </main>
    </AuthGuard>
  );
}

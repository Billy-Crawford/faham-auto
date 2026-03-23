"use client"

export default function ConversationList({ onSelect }: any) {

  const conversations = [
    { id: 1, name: "John Doe", last: "Is it still available?" },
    { id: 2, name: "Alice", last: "I can come tomorrow" },
  ]

  return (
    <div className="p-4 space-y-2">

      <h2 className="font-bold text-lg mb-4">
        Messages
      </h2>

      {conversations.map((c) => (
        <div
          key={c.id}
          onClick={() => onSelect(c)}
          className="p-3 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <p className="font-semibold">{c.name}</p>
          <p className="text-sm text-gray-500">{c.last}</p>
        </div>
      ))}

    </div>
  )
}

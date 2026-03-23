// src/components/PiecesSearch.tsx

"use client"

import { useState } from "react"

export default function PiecesSearch() {

  const [query, setQuery] = useState("")

  return (
    <div className="bg-white p-4 rounded-xl shadow flex gap-2">

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search parts (e.g oil filter, brake pads...)"
        className="flex-1 border p-3 rounded"
      />

      <button className="bg-indigo-600 text-white px-6 rounded">
        Search
      </button>

    </div>
  )
}
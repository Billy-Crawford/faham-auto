"use client"

import { useState } from "react"

export default function LicenseUpload() {

  const [file, setFile] = useState<File | null>(null)

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">

      <h3 className="font-semibold">
        Driver License Verification
      </h3>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      {file && (
        <p className="text-sm text-green-600">
          File uploaded: {file.name}
        </p>
      )}

      <button className="w-full bg-indigo-600 text-white py-2 rounded">
        Submit
      </button>

    </div>
  )
}


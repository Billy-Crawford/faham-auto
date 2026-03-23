"use client"

import { useState } from "react"

export default function KYCUpload() {

  const [doc, setDoc] = useState<File | null>(null)

  const handleUpload = (e: any) => {
    const file = e.target.files[0]
    if (file) setDoc(file)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">

      <h2 className="text-xl font-semibold">
        Vérification d'identité (KYC)
      </h2>

      <p className="text-sm text-gray-500">
        Nécessaire pour louer un véhicule
      </p>

      <input type="file" onChange={handleUpload} />

      {doc && (
        <p className="text-green-600 text-sm">
          Document uploadé ✔
        </p>
      )}

      {/* Statut */}
      <div className="bg-yellow-100 text-yellow-700 p-3 rounded text-sm">
        Non vérifié
      </div>

    </div>
  )
}


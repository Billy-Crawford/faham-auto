"use client"

import { useState } from "react"

export default function ProfileForm() {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  })

  const [photo, setPhoto] = useState<string | null>(null)

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handlePhoto = (e: any) => {
    const file = e.target.files[0]
    if (file) {
      setPhoto(URL.createObjectURL(file))
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">

      <h2 className="text-xl font-semibold">
        Informations personnelles
      </h2>

      {/* Photo */}
      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
          {photo && (
            <img src={photo} className="w-full h-full object-cover" />
          )}
        </div>

        <input type="file" onChange={handlePhoto} />

      </div>

      <input
        name="firstName"
        placeholder="Prénom"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        name="lastName"
        placeholder="Nom"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        name="phone"
        placeholder="Téléphone"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
        Enregistrer
      </button>

      <button className="w-full border py-3 rounded-lg text-red-500">
        Se déconnecter
      </button>

    </div>
  )
}


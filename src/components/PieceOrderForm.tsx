// src/components/PieceOrderForm.tsx

"use client"

import { useState } from "react"

export default function PieceOrderForm() {

  const [form, setForm] = useState({
    piece: "",
    brand: "",
    model: "",
    whatsapp: "",
  })

  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  // 🔥 gestion image
  const handleImageChange = (e: any) => {
    const file = e.target.files[0]

    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = () => {
    console.log("Order:", form, image)

    alert("Request sent successfully!")
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4 max-w-xl">

      <input
        name="piece"
        placeholder="Part name"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        name="brand"
        placeholder="Car brand"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        name="model"
        placeholder="Car model"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <input
        name="whatsapp"
        placeholder="WhatsApp number"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      {/* 🔥 Upload image */}
      <div className="space-y-2">

        <label className="text-sm font-medium">
          Upload part image (optional)
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />

      </div>

      {/* 🔥 Preview */}
      {preview && (
        <div className="mt-2">
          <img
            src={preview}
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg"
      >
        Commander
      </button>

    </div>
  )
}


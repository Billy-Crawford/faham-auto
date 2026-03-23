"use client"

import { useState } from "react"
import AuthLayout from "@/components/AuthLayout"
import Link from "next/link"

export default function RegisterPage() {

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm: "",
  })

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    console.log("Register:", form)
  }

  return (
    <AuthLayout title="Inscription">

      <div className="space-y-4">

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="password"
          name="confirm"
          placeholder="Confirmer mot de passe"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg"
        >
          S'inscrire
        </button>

        <p className="text-sm text-center text-gray-500">
          Déjà un compte ?{" "}
          <Link href="/auth/login" className="text-indigo-600">
            Se connecter
          </Link>
        </p>

      </div>

    </AuthLayout>
  )
}

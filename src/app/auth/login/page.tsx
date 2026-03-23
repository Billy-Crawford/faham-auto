"use client"

import { useState } from "react"
import AuthLayout from "@/components/AuthLayout"
import Link from "next/link"

export default function LoginPage() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    console.log("Login:", form)
  }

  return (
    <AuthLayout title="Connexion">

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

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg"
        >
          Se connecter
        </button>

        <p className="text-sm text-center text-gray-500">
          Pas de compte ?{" "}
          <Link href="/auth/register" className="text-indigo-600">
            S'inscrire
          </Link>
        </p>

      </div>

    </AuthLayout>
  )
}

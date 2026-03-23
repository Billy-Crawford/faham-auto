"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"

export default function AuthGuard({ children }: any) {

  const { isLoggedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/login")
    }
  }, [isLoggedIn])

  if (!isLoggedIn) return null

  return children
}


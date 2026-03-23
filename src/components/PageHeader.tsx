"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"

export default function PageHeader({ title }: { title?: string }) {

  const router = useRouter()

  return (
    <div className="flex items-center justify-between mb-6">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* 🔙 Back */}
        <button
          onClick={() => router.back()}
          className="text-xl"
        >
          ←
        </button>

        {/* Title optionnel */}
        {title && (
          <h1 className="font-semibold text-lg">
            {title}
          </h1>
        )}

      </div>

      {/* RIGHT (logo retour home) */}
      <Link href="/" className="font-bold text-lg">
        AutoMarket
      </Link>

    </div>
  )
}


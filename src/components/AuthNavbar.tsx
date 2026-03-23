import Link from "next/link"

export default function AuthNavbar() {
  return (
    <div className="w-full px-6 md:px-10 py-6 flex justify-between items-center">

      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        AutoMarket
      </Link>

      {/* Optionnel (tu peux adapter selon page) */}
      <Link href="/auth/login" className="text-gray-600">
        Se connecter
      </Link>

    </div>
  )
}


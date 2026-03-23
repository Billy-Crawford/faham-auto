import AuthNavbar from "./AuthNavbar"

export default function AuthLayout({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔥 Navbar */}
      <AuthNavbar />

      {/* 🔥 Contenu centré */}
      <div className="flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">

          <h1 className="text-2xl font-bold mb-6 text-center">
            {title}
          </h1>

          {children}

        </div>

      </div>

    </div>
  )
}


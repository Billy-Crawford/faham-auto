import Link from "next/link"

export default function Footer() {

  const whatsappNumber = "22870102975" 

  return (
    <footer className="bg-gray-100 mt-20">

      <div className="px-6 md:px-10 py-10 grid md:grid-cols-3 gap-10">

        {/* Logo + description */}
        <div>
          <h2 className="text-xl font-bold mb-2">
            AutoMarket
          </h2>

          <p className="text-gray-600 text-sm">
            Buy, rent vehicles and order spare parts easily across Togo and internationally.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-2">

          <h3 className="font-semibold mb-2">
            Navigation
          </h3>

          <Link href="/annonces" className="block text-gray-600 hover:text-black">
            Annonces
          </Link>

          <Link href="/location" className="block text-gray-600 hover:text-black">
            Location
          </Link>

          <Link href="/pieces" className="block text-gray-600 hover:text-black">
            Passer une commande
          </Link>

          <Link href="/about" className="block text-gray-600 hover:text-black">
            À propos
          </Link>

        </div>

        {/* Contact */}
        <div className="space-y-2">

          <h3 className="font-semibold mb-2">
            Contact
          </h3>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            className="block text-green-600 font-medium"
          >
            💬 WhatsApp
          </a>

          <p className="text-sm text-gray-500">
            Support rapide via WhatsApp
          </p>

        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 pb-6">
        © {new Date().getFullYear()} Faham-AutoMarket. Tous droits réservés.
      </div>

    </footer>
  )
}
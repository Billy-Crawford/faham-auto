import PageHeader from "@/components/PageHeader"

export default function AboutPage() {

  const whatsappNumber = "22890000000"

  return (
    <main className="px-6 md:px-10 py-16 max-w-3xl mx-auto space-y-8">

        <PageHeader/>

      <h1 className="text-3xl font-bold">
        À propos de AutoMarket
      </h1>

      <p className="text-gray-600">
        AutoMarket est une plateforme qui permet d’acheter, louer des véhicules
        et commander des pièces automobiles facilement, localement au Togo
        ou à l’international.
      </p>

      <p className="text-gray-600">
        Notre mission est de simplifier l’accès aux véhicules et pièces,
        tout en offrant une expérience rapide, sécurisée et fiable.
      </p>

      <div className="bg-gray-100 p-6 rounded-xl space-y-4">

        <h2 className="text-xl font-semibold">
          Besoin d’aide ?
        </h2>

        <p className="text-gray-600">
          Contactez-nous directement via WhatsApp pour une assistance rapide.
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg"
        >
          💬 Nous contacter sur WhatsApp
        </a>

      </div>

    </main>
  )
}


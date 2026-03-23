import Link from "next/link"
import AnnonceCard from "./AnnonceCard"

export default function HomeListings() {

  const annonces = [1,2,3,4] // limité volontairement

  return (
    <section className="px-6 md:px-10 py-16">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <h2 className="text-2xl font-bold">
          Latest vehicles & parts
        </h2>

        <Link href="/annonces">
          <button className="text-indigo-600 font-semibold hover:underline">
            View all →
          </button>
        </Link>

      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {annonces.map((a, i) => (
          <AnnonceCard key={i} />
        ))}
      </div>

    </section>
  )
}


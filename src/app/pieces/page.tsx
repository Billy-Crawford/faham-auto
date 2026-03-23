// src/app/pieces/page.tsx

import PieceCard from "../../components/PieceCard"
import PiecesSearch from "../../components/PiecesSearch"
import PieceOrderForm from "../../components/PieceOrderForm"
import PageHeader from "@/components/PageHeader"

export default function PiecesPage() {

  const pieces = [1,2,3,4,5,6] // mock

  return (
    <main className="px-6 md:px-10 py-10 space-y-10">

        <PageHeader title="Commander une pièce" />

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Spare Parts Marketplace
        </h1>

        <p className="text-gray-500 mt-2">
          Find and order vehicle parts instantly in Togo
        </p>
      </div>

      {/* Search */}
      <PiecesSearch />

      {/* Catalogue */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pieces.map((p, i) => (
          <PieceCard key={i} />
        ))}
      </div>

      {/* Divider */}
      <div className="border-t pt-10">

        <h2 className="text-2xl font-semibold mb-4">
          Can't find your part?
        </h2>

        <p className="text-gray-500 mb-6">
          Send us a request and we will find it for you.
        </p>

        <PieceOrderForm />

      </div>

    </main>
  )
}

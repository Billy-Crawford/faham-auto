// src/components/PieceCard.tsx

export default function PieceCard() {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

      <img
        src="/car.jpg"
        className="w-full h-40 object-cover"
      />

      <div className="p-4 space-y-2">

        <h3 className="font-semibold">
          Oil Filter
        </h3>

        <p className="text-sm text-gray-500">
          Toyota • Corolla
        </p>

        <p className="font-bold">
          10,000 FCFA
        </p>

        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
          Order now
        </button>

      </div>

    </div>
  )
}

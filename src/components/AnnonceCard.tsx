import Link from "next/link";

export default function AnnonceCard() {
  return (
    <Link href="/annonces/1" className="block">
      
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">

        {/* Image */}
        <div className="relative">
          <img
            src="/car.jpg"
            className="w-full h-48 object-cover"
          />

          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            Verified
          </span>
        </div>

        {/* Content */}
        <div className="p-4">

          <h3 className="font-semibold">
            Toyota Corolla 2020
          </h3>

          <p className="text-sm text-gray-500">
            45,000 km • Petrol • Automatic
          </p>

          <p className="text-lg font-bold mt-2">
            8,500,000 FCFA
          </p>

          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg">
            Voir Details
          </button>

        </div>

      </div>

    </Link>
  )
}


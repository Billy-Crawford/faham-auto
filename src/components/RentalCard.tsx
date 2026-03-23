import Link from "next/link"

export default function RentalCard() {
  return (
    <Link href="/location/1" className="block">

      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

        <img
          src="/car.jpg"
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <h3 className="font-semibold">
            BMW X5 2022
          </h3>

          <p className="text-sm text-gray-500">
            Automatic • Air conditioning
          </p>

          <p className="text-lg font-bold mt-2 text-indigo-600">
            25,000 FCFA / day
          </p>

        </div>

      </div>

    </Link>
  )
}
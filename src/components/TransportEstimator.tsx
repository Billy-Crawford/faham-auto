// src/app/components/TransportEstimator.tsx

"use client"

import { useState } from "react"

const rates: Record<string, number> = {
  France: 1200000,
  Germany: 1300000,
  Belgium: 1100000,
  USA: 2000000,
}

export default function TransportEstimator() {

  const [country, setCountry] = useState("")
  const [price, setPrice] = useState<number | null>(null)

  const handleEstimate = () => {
    if (country && rates[country]) {
      setPrice(rates[country])
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">

      <h3 className="font-semibold text-lg">
        🚚 Transport estimation
      </h3>

      {/* Select country */}
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="w-full border p-3 rounded"
      >
        <option value="">Select origin country</option>
        {Object.keys(rates).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {/* Button */}
      <button
        onClick={handleEstimate}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg"
      >
        Estimate transport
      </button>

      {/* Result */}
      {price && (
        <div className="bg-gray-50 p-4 rounded space-y-2">

          <p className="font-semibold">
            Estimated cost: {price.toLocaleString()} FCFA
          </p>

          <p className="text-sm text-gray-500">
            Delivery time: 3 - 6 weeks
          </p>

          <p className="text-xs text-yellow-600">
            ⚠️ Customs fees not included
          </p>

        </div>
      )}

    </div>
  )
}


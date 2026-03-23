"use client"

import { useState, useEffect } from "react"

export default function RentalBooking({ pricePerDay }: { pricePerDay: number }) {

  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [days, setDays] = useState(0)
  const [total, setTotal] = useState(0)
  const [licenseUploaded, setLicenseUploaded] = useState(false)

  // 🔥 calcul dynamique
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate)
      const end = new Date(endDate)

      const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)

      if (diff > 0) {
        setDays(diff)
        setTotal(diff * pricePerDay)
      } else {
        setDays(0)
        setTotal(0)
      }
    }
  }, [startDate, endDate, pricePerDay])

  // 🔥 disponibilité mock
  const unavailableDates = ["2026-03-25", "2026-03-26"]

  const isUnavailable = (date: string) => {
    return unavailableDates.includes(date)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">

      <h3 className="font-semibold text-lg">
        📅 Booking
      </h3>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-2">

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded"
        />

      </div>

      {/* Availability */}
      {(isUnavailable(startDate) || isUnavailable(endDate)) && (
        <p className="text-red-500 text-sm">
          ❌ Selected dates not available
        </p>
      )}

      {/* Price */}
      {days > 0 && !isUnavailable(startDate) && !isUnavailable(endDate) && (
        <div className="bg-gray-50 p-3 rounded">

          <p className="text-sm">
            {days} days × {pricePerDay.toLocaleString()} FCFA
          </p>

          <p className="font-bold text-lg">
            Total: {total.toLocaleString()} FCFA
          </p>

        </div>
      )}

      {/* License upload */}
      <div>
        <label className="text-sm block mb-1">
          Upload driver license
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={() => setLicenseUploaded(true)}
        />
      </div>

      {/* CTA */}
      <button
        disabled={
          !startDate ||
          !endDate ||
          days <= 0 ||
          isUnavailable(startDate) ||
          isUnavailable(endDate) ||
          !licenseUploaded
        }
        className={`w-full py-3 rounded-lg text-white ${
          startDate &&
          endDate &&
          days > 0 &&
          !isUnavailable(startDate) &&
          !isUnavailable(endDate) &&
          licenseUploaded
            ? "bg-indigo-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Reserve now
      </button>

      {!licenseUploaded && (
        <p className="text-xs text-yellow-600">
          ⚠️ License required before booking
        </p>
      )}

    </div>
  )
}

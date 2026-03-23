"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function AnnonceFilters() {

  const router = useRouter()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState("")
  const [type, setType] = useState("")
  const [location, setLocation] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  // 🔁 sync avec URL au chargement
  useEffect(() => {
    setSearch(searchParams.get("search") || "")
    setType(searchParams.get("type") || "")
    setLocation(searchParams.get("location") || "")
    setMinPrice(searchParams.get("minPrice") || "")
    setMaxPrice(searchParams.get("maxPrice") || "")
  }, [searchParams])

  // 🚀 appliquer filtres
  const applyFilters = () => {

    const params = new URLSearchParams()

    if (search) params.set("search", search)
    if (type) params.set("type", type)
    if (location) params.set("location", location)
    if (minPrice) params.set("minPrice", minPrice)
    if (maxPrice) params.set("maxPrice", maxPrice)

    router.push(`/annonces?${params.toString()}`)
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-4">

      <h2 className="font-semibold text-lg">Filters</h2>

      {/* Search */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 rounded"
        placeholder="Search (Toyota, BMW...)"
      />

      {/* Type */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option value="">All types</option>
        <option value="car">Car</option>
        <option value="motorbike">Motorbike</option>
        <option value="parts">Parts</option>
        <option value="rental">Rental</option>
      </select>

      {/* Location */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option value="">All locations</option>
        <option value="togo">Togo</option>
        <option value="france">France</option>
        <option value="germany">Germany</option>
      </select>

      {/* Price */}
      <div className="flex gap-2">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min"
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max"
          className="w-full border p-2 rounded"
        />
      </div>

      {/* CTA */}
      <button
        onClick={applyFilters}
        className="w-full bg-indigo-600 text-white py-2 rounded"
      >
        Apply Filters
      </button>

    </div>
  )
}


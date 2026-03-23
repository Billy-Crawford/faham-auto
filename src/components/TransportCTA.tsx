// src/app/components/TransportCTA.tsx

"use client"

export default function TransportCTA() {

  const scrollToEstimator = () => {
    document
      .getElementById("transport-section")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToEstimator}
      className="w-full border py-3 rounded-lg"
    >
      Estimate transport
    </button>
  )
}


// src/app/annonces/[id]/page.tsx

import TransportEstimator from "@/components/TransportEstimator";
import CarouselMedia from "@/components/CarouselMedia";
import SellerCard from "@/components/SellerCard";
import TransportCTA from "@/components/TransportCTA";
import Link from "next/link";

export default function AnnonceDetail() {
  // mock data
  const annonce = {
    title: "Toyota Corolla 2020",
    price: "8,500,000 FCFA",
    location: "Lomé, Togo",
    images: ["/car.jpg", "/car.jpg"],
    specs: {
      mileage: "45,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      year: 2020,
    },
    isImported: true, // change à true pour tester
    description: "Well maintained vehicle, no accidents, full options...",
  };

  return (
    <main className="px-6 md:px-10 py-10">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          <CarouselMedia images={annonce.images} />

          {/* Description */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Description</h2>

            <p className="text-gray-600">{annonce.description}</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* Infos annonce */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h1 className="text-2xl font-bold">{annonce.title}</h1>

            <p className="text-gray-500">{annonce.location}</p>

            <p className="text-2xl font-bold text-indigo-600">
              {annonce.price}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <span>🚗 {annonce.specs.mileage}</span>
              <span>⛽ {annonce.specs.fuel}</span>
              <span>⚙️ {annonce.specs.transmission}</span>
              <span>📅 {annonce.specs.year}</span>
            </div>

            {/* Import info */}
            {annonce.isImported && <TransportCTA />}

            {/* CTA */}
            <div className="space-y-2 pt-2">
              <Link
                href={`/messages?seller=John Doe&annonce=${encodeURIComponent(annonce.title)}`}
                className="block w-full bg-indigo-600 text-white py-3 rounded-lg text-center"
              >
                Contact seller
              </Link>

              {/* 👉 On garde UN SEUL système */}
              {/* {annonce.isImported && (
                <button
                  onClick={() => {
                    document
                      .getElementById("transport-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="w-full border py-3 rounded-lg"
                >
                  Estimate transport
                </button>
              )} */}
            </div>
          </div>

          {/* Seller */}
          <SellerCard />

          {/* Transport */}
          {annonce.isImported && (
            <div id="transport-section">
              <TransportEstimator />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

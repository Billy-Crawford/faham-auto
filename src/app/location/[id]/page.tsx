import RentalGallery from "../../../components/RentalGallery";
import LicenseUpload from "../../../components/LicenseUpload";
import RentalBooking from "@/components/RentalBooking";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AuthGuard from "@/components/AuthGuard";

export default function RentalDetail() {
  const vehicle = {
    name: "BMW X5 2022",
    price: "25,000 FCFA / day",
    images: ["/car.jpg", "/car.jpg", "/car.jpg"],
  };

  return (
    <AuthGuard>
      <main className="px-6 md:px-10 py-10">
        <PageHeader title="Location véhicule" />

        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <RentalGallery images={vehicle.images} />
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow space-y-4">
              <h1 className="text-2xl font-bold">{vehicle.name}</h1>

              <p className="text-xl font-bold text-indigo-600">
                {vehicle.price}
              </p>

              {/* <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
              Reserve now
            </button> */}

              <RentalBooking pricePerDay={25000} />

              <Link
                href={`/messages?seller=Car Owner&annonce=${encodeURIComponent(vehicle.name)}`}
                className="block w-full border py-3 rounded-lg text-center hover:bg-gray-100 transition"
              >
                Nous contacter
              </Link>
            </div>

            {/* 🔥 Upload permis */}
            <LicenseUpload />
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}

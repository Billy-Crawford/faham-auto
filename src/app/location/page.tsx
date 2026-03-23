import PageHeader from "@/components/PageHeader";
import RentalCard from "../../components/RentalCard";

export default function LocationPage() {
  const vehicles = [1, 2, 3, 4, 5, 6];

  return (
    <main className="px-6 md:px-18 py-10">

        <PageHeader title="Location véhicule" />

      <h1 className="text-3xl font-bold mb-6">سيارات a louer</h1>

      {/* Recherche */}
      <div className="mb-6">
        <input
          placeholder="Rechercher l'engin que vous vouler louer..."
          className="w-full md:w-1/3 border p-3 rounded-lg"
        />
      </div>

      {/* Liste des véhicules à louer */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((v, i) => (
          <RentalCard key={i} />
        ))}
      </div>
    </main>
  );
}

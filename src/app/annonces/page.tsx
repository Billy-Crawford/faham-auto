import PageHeader from "@/components/PageHeader"
import AnnonceCard from "../../components/AnnonceCard"
import AnnonceFilters from "../../components/AnnonceFilters"

export default function AnnoncesPage({
  searchParams,
}: {
  searchParams: any
}) {

  // 👉 ici tu brancheras ton backend plus tard
  console.log(searchParams)

  const annonces = [1,2,3,4,5,6]

  return (
    <main className="px-6 md:px-10 py-10">

      <PageHeader title="Location vehicule" />

      <h1 className="text-3xl font-bold mb-6">
        Browse vehicles & parts
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Filters */}
        <div className="lg:col-span-1">
          <AnnonceFilters />
        </div>

        {/* Listings */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {annonces.map((a, i) => (
            <AnnonceCard key={i} />
          ))}
        </div>

      </div>

    </main>
  )
}
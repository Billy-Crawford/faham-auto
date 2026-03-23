export default function SearchBar() {
  return (
    <div className="
      bg-white shadow-lg rounded-xl p-4
      flex flex-wrap gap-3 items-center
      w-full max-w-xl
    ">

      <input
        className="border p-2 rounded-lg flex-1 min-w-[120px]"
        placeholder="Location"
      />

      <input
        type="date"
        className="border p-2 rounded-lg flex-1 min-w-[120px]"
      />

      <input
        type="date"
        className="border p-2 rounded-lg flex-1 min-w-[120px]"
      />

      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg w-full md:w-auto">
        Search
      </button>

    </div>
  )
}


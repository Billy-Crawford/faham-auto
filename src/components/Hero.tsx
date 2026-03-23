import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="px-10 py-16 grid md:grid-cols-2 items-center gap-10">
      <div>
        <h1 className="text-5xl font-bold leading-tight">
          Find the perfect car for your next trip
        </h1>

        <p className="text-gray-500 mt-4">
          Buy, rent or find spare parts for vehicles anywhere.
        </p>

        <div className="mt-8">
          <SearchBar />
        </div>
      </div>

      <div
        className="
                relative w-full mx-auto
                max-w-md
                md:max-w-lg
                lg:max-w-xl
                xl:max-w-2xl
                "
      >
        {/* Background orange */}
        <div
          className="
                absolute inset-0
                bg-orange-500
                rounded-3xl
                translate-x-4 translate-y-4
                md:translate-x-6 md:translate-y-6
                lg:translate-x-8 lg:translate-y-8
            "
        ></div>

        {/* Image */}
        <img src="/car.jpg" className="relative w-full object-contain" />
      </div>
    </section>
  );
}

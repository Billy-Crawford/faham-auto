export default function Partners() {

  const partners = [
    "Hertz",
    "Europcar",
    "National",
    "Sixt",
    "CarRentals"
  ]

  return (
    <section className="py-6 border-t">

      <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-gray-400 font-semibold text-sm md:text-base">

        {partners.map((p, i) => (
          <span key={i} className="text-xs md:text-base">
            {p}
          </span>
        ))}

      </div>

    </section>
  )
}

export default function Partners() {

  const partners = [
    "Hertz",
    "Europcar",
    "National",
    "Sixt",
    "CarRentals"
  ]

  return (
    <section className="py-10 border-t">

      <div className="flex justify-center gap-10 text-gray-400 font-semibold">

        {partners.map((p, i) => (
          <span key={i}>{p}</span>
        ))}

      </div>

    </section>
  )
}


export default function SellerCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">

      {/* Header */}
      <div className="flex items-center gap-4">

        <img
          src="/user.jpg"
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold">
            John Doe
          </h3>

          <p className="text-sm text-gray-500">
            Lomé, Togo
          </p>
        </div>

      </div>

      {/* Trust indicators */}
      <div className="flex items-center justify-between text-sm">

        <span className="flex items-center gap-1">
          ⭐ 4.8 (120 reviews)
        </span>

        <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
          Verified
        </span>

      </div>

      <div className="text-sm text-gray-500">
        Responds within 1 hour
      </div>

      {/* CTA */}
      {/* <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
        Contact Seller
      </button> */}

    </div>
  )
}


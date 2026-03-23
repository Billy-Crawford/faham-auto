"use client"

import { useState } from "react"

export default function CarouselMedia({ images }: { images: string[] }) {

  const [index, setIndex] = useState(0)

  return (
    <div>

      {/* Main image */}
      <img
        src={images[index]}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setIndex(i)}
            className={`w-20 h-20 object-cover rounded cursor-pointer border ${
              index === i ? "border-indigo-600" : ""
            }`}
          />
        ))}
      </div>

    </div>
  )
}


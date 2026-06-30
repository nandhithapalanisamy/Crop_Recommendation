import React from "react";

const soilData = [
  {
    soil: "🟤 Loamy Soil",
    crop: "🌾 Rice",
    description:
      "Rich in nutrients and excellent water retention. Suitable for rice, wheat and sugarcane.",
    color: "bg-amber-100",
  },
  {
    soil: "⚫ Black Soil",
    crop: "🌱 Cotton",
    description:
      "Highly fertile soil with excellent moisture retention. Best for cotton and soybean.",
    color: "bg-gray-200",
  },
  {
    soil: "🔴 Red Soil",
    crop: "🌻 Groundnut",
    description:
      "Well-drained soil suitable for groundnut, millets and pulses.",
    color: "bg-red-100",
  },
  {
    soil: "🟡 Sandy Soil",
    crop: "🍉 Watermelon",
    description:
      "Fast-draining soil ideal for watermelon, muskmelon and carrots.",
    color: "bg-yellow-100",
  },
  {
    soil: "🟫 Clay Soil",
    crop: "🌾 Sugarcane",
    description:
      "High water-holding capacity. Suitable for sugarcane and paddy cultivation.",
    color: "bg-orange-100",
  },
  {
    soil: "🟢 Alluvial Soil",
    crop: "🌽 Maize",
    description:
      "Very fertile soil supporting maize, wheat, pulses and vegetables.",
    color: "bg-green-100",
  },
];

export default function SoilTable() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-green-700 mb-6">
        🌱 Best Crops by Soil Type
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {soilData.map((item, index) => (

          <div
            key={index}
            className={`${item.color} rounded-2xl p-5 shadow hover:shadow-xl transition`}
          >

            <h3 className="text-xl font-bold">
              {item.soil}
            </h3>

            <h2 className="text-2xl font-bold text-green-700 mt-3">
              {item.crop}
            </h2>

            <p className="text-gray-600 mt-4 leading-7">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}
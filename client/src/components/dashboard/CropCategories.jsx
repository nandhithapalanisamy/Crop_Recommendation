import React from "react";

const categories = [
  "🌾 Cereals & Grains",
  "🥬 Vegetables",
  "🍎 Fruits",
  "🌻 Oilseeds",
  "🌿 Pulses & Legumes",
  "☕ Plantation Crops",
  "🌶️ Spices & Herbs",
  "🌱 Fiber Crops",
  "💰 Cash Crops",
  "🌾 Fodder Crops",
];

export default function CropCategories() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-3xl font-bold text-green-700 mb-6">
        🌱 Crop Categories
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

        {categories.map((category, index) => (

          <div
            key={index}
            className="bg-green-50 rounded-2xl p-6 text-center hover:bg-green-100 hover:scale-105 transition duration-300 shadow"
          >
            <h3 className="text-lg font-semibold">
              {category}
            </h3>
          </div>

        ))}

      </div>

    </div>
  );
}
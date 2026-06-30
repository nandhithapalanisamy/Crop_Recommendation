import React from "react";

const crops = [
  {
    rank: "🥇",
    crop: "🌾 Rice",
    category: "Cereals & Grains",
    demand: "⭐⭐⭐⭐⭐",
    profit: "💰💰💰💰",
  },
  {
    rank: "🥈",
    crop: "🌾 Wheat",
    category: "Cereals & Grains",
    demand: "⭐⭐⭐⭐⭐",
    profit: "💰💰💰",
  },
  {
    rank: "🥉",
    crop: "🌽 Maize",
    category: "Cereals & Grains",
    demand: "⭐⭐⭐⭐",
    profit: "💰💰💰",
  },
  {
    rank: "4",
    crop: "🌻 Groundnut",
    category: "🌻 Oilseeds",
    demand: "⭐⭐⭐⭐",
    profit: "💰💰💰💰",
  },
  {
    rank: "5",
    crop: "🍌 Banana",
    category: "🍎 Fruits",
    demand: "⭐⭐⭐⭐⭐",
    profit: "💰💰💰💰💰",
  },
  {
    rank: "6",
    crop: "🥭 Mango",
    category: "🍎 Fruits",
    demand: "⭐⭐⭐⭐",
    profit: "💰💰💰💰",
  },
  {
    rank: "7",
    crop: "🌱 Cotton",
    category: "🌱 Fiber Crops",
    demand: "⭐⭐⭐⭐",
    profit: "💰💰💰",
  },
  {
    rank: "8",
    crop: "☕ Coffee",
    category: "☕ Plantation Crops",
    demand: "⭐⭐⭐⭐",
    profit: "💰💰💰💰",
  },
  {
    rank: "9",
    crop: "🌶 Black Pepper",
    category: "🌶️ Spices & Herbs",
    demand: "⭐⭐⭐",
    profit: "💰💰💰💰",
  },
  {
    rank: "10",
    crop: "🍍 Pineapple",
    category: "🍎 Fruits",
    demand: "⭐⭐⭐⭐",
    profit: "💰💰💰",
  },
];

export default function TopCropTable() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-green-700 mb-6">
        🏆 Top 10 Recommended Crops in India
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-green-600 text-white">

              <th className="p-4 text-left rounded-l-xl">
                Rank
              </th>

              <th className="p-4 text-left">
                Crop
              </th>

              <th className="p-4 text-left">
                Category
              </th>

              <th className="p-4 text-center">
                Market Demand
              </th>

              <th className="p-4 text-center rounded-r-xl">
                Profitability
              </th>

            </tr>

          </thead>

          <tbody>

            {crops.map((crop) => (

              <tr
                key={crop.rank}
                className="border-b hover:bg-green-50 transition"
              >

                <td className="p-4 font-bold">
                  {crop.rank}
                </td>

                <td className="p-4 font-semibold">
                  {crop.crop}
                </td>

                <td className="p-4">
                  {crop.category}
                </td>

                <td className="text-center">
                  {crop.demand}
                </td>

                <td className="text-center">
                  {crop.profit}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
import React from "react";

const seasons = [
  {
    season: "🌸 Spring",
    color: "bg-pink-100",
    crops: ["🥔 Potato", "🥕 Carrot", "🥬 Cabbage", "🧅 Onion"],
  },

  {
    season: "☀ Summer",
    color: "bg-yellow-100",
    crops: ["🌽 Maize", "🍅 Tomato", "🥭 Mango", "🍉 Watermelon"],
  },

  {
    season: "🌧 Monsoon",
    color: "bg-blue-100",
    crops: ["🌾 Rice", "🌱 Cotton", "🌿 Soybean", "🌻 Groundnut"],
  },

  {
    season: "🍂 Autumn",
    color: "bg-orange-100",
    crops: ["🌻 Mustard", "🌶 Chilli", "🥜 Sesame", "🌿 Green Gram"],
  },

  {
    season: "❄ Winter",
    color: "bg-cyan-100",
    crops: ["🌾 Wheat", "🌾 Barley", "🥬 Spinach", "🌱 Chickpea"],
  },
];

export default function SeasonChart() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-green-700 mb-6">
        📅 Seasonal Crop Calendar
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">

        {seasons.map((item) => (

          <div
            key={item.season}
            className={`${item.color} rounded-2xl p-5 shadow hover:shadow-xl transition`}
          >

            <h3 className="text-xl font-bold mb-4">
              {item.season}
            </h3>

            <div className="space-y-3">

              {item.crops.map((crop) => (

                <div
                  key={crop}
                  className="bg-white rounded-lg px-3 py-2 shadow-sm"
                >
                  {crop}
                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
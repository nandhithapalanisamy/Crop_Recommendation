import React from "react";

const temperatureData = [
  {
    temp: "❄️ 10°C - 15°C",
    crop: "🌾 Wheat",
    description: "Best suited for cool winter climates.",
    color: "bg-cyan-100",
  },
  {
    temp: "🌤️ 15°C - 20°C",
    crop: "🥔 Potato",
    description: "Ideal for moderate temperatures.",
    color: "bg-blue-100",
  },
  {
    temp: "🌱 20°C - 25°C",
    crop: "🌾 Rice",
    description: "Requires warm climate with sufficient water.",
    color: "bg-green-100",
  },
  {
    temp: "☀️ 25°C - 30°C",
    crop: "🌽 Maize",
    description: "Excellent growth in warm conditions.",
    color: "bg-yellow-100",
  },
  {
    temp: "🔥 30°C - 35°C",
    crop: "🌱 Cotton",
    description: "Thrives in hot and dry climates.",
    color: "bg-orange-100",
  },
  {
    temp: "🌡️ Above 35°C",
    crop: "🌾 Sugarcane",
    description: "Performs well in tropical conditions.",
    color: "bg-red-100",
  },
];

export default function TemperatureTable() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-green-700 mb-6">
        🌡️ Best Crops by Temperature
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {temperatureData.map((item, index) => (

          <div
            key={index}
            className={`${item.color} rounded-2xl p-5 shadow hover:shadow-xl transition`}
          >
            <h3 className="text-lg font-bold text-gray-800">
              {item.temp}
            </h3>

            <h1 className="text-2xl mt-3 font-bold text-green-700">
              {item.crop}
            </h1>

            <p className="mt-4 text-gray-600">
              {item.description}
            </p>
          </div>

        ))}

      </div>

    </div>
  );
}
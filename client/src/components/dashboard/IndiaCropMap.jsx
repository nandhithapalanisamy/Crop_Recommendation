import React from "react";

const states = [
  {
    state: "Punjab",
    crop: "🌾 Wheat",
    color: "bg-yellow-100",
  },
  {
    state: "Tamil Nadu",
    crop: "🌾 Rice",
    color: "bg-green-100",
  },
  {
    state: "Karnataka",
    crop: "☕ Coffee",
    color: "bg-orange-100",
  },
  {
    state: "Kerala",
    crop: "🥥 Coconut",
    color: "bg-emerald-100",
  },
  {
    state: "Maharashtra",
    crop: "🌱 Cotton",
    color: "bg-blue-100",
  },
  {
    state: "Andhra Pradesh",
    crop: "🌶️ Chilli",
    color: "bg-red-100",
  },
  {
    state: "Gujarat",
    crop: "🌻 Groundnut",
    color: "bg-amber-100",
  },
  {
    state: "Rajasthan",
    crop: "🌾 Bajra",
    color: "bg-orange-200",
  },
  {
    state: "Uttar Pradesh",
    crop: "🌾 Sugarcane",
    color: "bg-lime-100",
  },
  {
    state: "West Bengal",
    crop: "🌾 Rice",
    color: "bg-teal-100",
  },
];

export default function IndiaCropMap() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-3xl font-bold text-green-700 mb-2">
        🗺️ India Agriculture Overview
      </h2>

      <p className="text-gray-500 mb-6">
        Major crops cultivated across different Indian states.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">

        {states.map((item, index) => (

          <div
            key={index}
            className={`${item.color} rounded-2xl p-5 shadow hover:scale-105 transition duration-300`}
          >

            <h3 className="font-bold text-lg">
              📍 {item.state}
            </h3>

            <p className="mt-5 text-2xl">
              {item.crop}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}
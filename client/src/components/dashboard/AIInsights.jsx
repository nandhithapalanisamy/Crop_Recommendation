import React from "react";

const insights = [
  {
    icon: "🌾",
    title: "Rice",
    description:
      "Rice performs exceptionally well in regions receiving high rainfall and fertile clay loam soils.",
    color: "bg-green-100",
  },
  {
    icon: "🌱",
    title: "Cotton",
    description:
      "Cotton is highly suitable for black soils with warm temperatures and moderate rainfall.",
    color: "bg-blue-100",
  },
  {
    icon: "🌻",
    title: "Groundnut",
    description:
      "Groundnut provides high profitability while requiring comparatively less irrigation.",
    color: "bg-yellow-100",
  },
  {
    icon: "🌽",
    title: "Maize",
    description:
      "Maize adapts well to different soil conditions and provides consistent production.",
    color: "bg-orange-100",
  },
  {
    icon: "🍌",
    title: "Banana",
    description:
      "Banana delivers one of the highest yields when grown under tropical climatic conditions.",
    color: "bg-lime-100",
  },
  {
    icon: "🌧️",
    title: "Season Planning",
    description:
      "High-water crops should be cultivated during the monsoon season for better productivity.",
    color: "bg-cyan-100",
  },
];

export default function AIInsights() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <div className="flex items-center gap-3 mb-8">
        <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-3xl">
          🤖
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-700">
            AI Farming Insights
          </h2>

          <p className="text-gray-500">
            Smart recommendations generated from agricultural knowledge.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {insights.map((item, index) => (

          <div
            key={index}
            className={`${item.color} rounded-2xl p-5 shadow hover:shadow-xl transition duration-300`}
          >

            <div className="text-4xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-700 leading-7">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}
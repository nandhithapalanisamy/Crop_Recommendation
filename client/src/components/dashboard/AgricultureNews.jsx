import React from "react";
import {
  Newspaper,
  ArrowRight,
  CloudRain,
  Tractor,
  Leaf,
  Wheat,
} from "lucide-react";

const news = [
  {
    icon: <CloudRain className="text-blue-600" size={28} />,
    title: "Monsoon Forecast 2026",
    description:
      "The Indian Meteorological Department predicts a normal southwest monsoon, supporting Kharif crop cultivation.",
    date: "26 June 2026",
    color: "bg-blue-50",
  },
  {
    icon: <Wheat className="text-yellow-600" size={28} />,
    title: "Rice Production Expected to Increase",
    description:
      "Improved irrigation and favorable weather conditions are expected to boost rice production this season.",
    date: "24 June 2026",
    color: "bg-yellow-50",
  },
  {
    icon: <Tractor className="text-green-700" size={28} />,
    title: "Smart Farming Technologies",
    description:
      "AI-powered farming tools are helping farmers improve productivity while reducing water consumption.",
    date: "22 June 2026",
    color: "bg-green-50",
  },
  {
    icon: <Leaf className="text-emerald-600" size={28} />,
    title: "Organic Farming Growth",
    description:
      "Demand for organic crops continues to grow due to increasing consumer awareness.",
    date: "20 June 2026",
    color: "bg-emerald-50",
  },
];

export default function AgricultureNews() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <div className="flex items-center gap-3 mb-6">
        <Newspaper className="text-green-700" size={32} />
        <h2 className="text-3xl font-bold text-green-700">
          Agriculture News
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {news.map((item, index) => (

          <div
            key={index}
            className={`${item.color} rounded-2xl p-6 shadow hover:shadow-xl transition`}
          >

            <div className="flex items-center gap-4">

              <div className="bg-white rounded-full p-3 shadow">
                {item.icon}
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.date}
                </p>

              </div>

            </div>

            <p className="mt-5 text-gray-700 leading-7">
              {item.description}
            </p>


          </div>

        ))}

      </div>

    </div>
  );
}
import {
  Sprout,
  Layers3,
  MapPinned,
  Database,
} from "lucide-react";

const stats = [
  {
    title: "Total Crops",
    value: "150",
    icon: <Sprout size={28} />,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Crop Categories",
    value: "10",
    icon: <Layers3 size={28} />,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "States Covered",
    value: "28",
    icon: <MapPinned size={28} />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Dataset Records",
    value: "25,000+",
    icon: <Database size={28} />,
    color: "bg-purple-100 text-purple-700",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-gray-500 text-sm">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {item.value}
            </h2>
          </div>

          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
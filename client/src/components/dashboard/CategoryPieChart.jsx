import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Cereals & Grains",
    "Vegetables",
    "Fruits",
    "Oilseeds",
    "Pulses",
    "Plantation",
    "Spices",
    "Cash Crops",
    "Fiber Crops",
    "Fodder"
  ],

  datasets: [
    {
      data: [18, 28, 15, 10, 8, 6, 5, 4, 3, 3],

      backgroundColor: [
        "#22c55e",
        "#84cc16",
        "#facc15",
        "#f97316",
        "#3b82f6",
        "#8b5cf6",
        "#ec4899",
        "#14b8a6",
        "#ef4444",
        "#6b7280"
      ],

      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,

  plugins: {

    title: {
      display: true,
      text: "Crop Category Distribution",
      font: {
        size: 18,
      },
    },

    legend: {
      position: "bottom",
    },
  },
};

export default function CategoryPieChart() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <Pie
        data={data}
        options={options}
      />
    </div>
  );
}
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Rice",
    "Wheat",
    "Sugarcane",
    "Cotton",
    "Maize",
    "Groundnut",
    "Soybean",
    "Banana",
    "Potato",
    "Tomato",
  ],

  datasets: [
    {
      label: "Recommendation Score",
      data: [98, 94, 91, 88, 85, 82, 80, 78, 76, 74],
      backgroundColor: [
        "#22c55e",
        "#16a34a",
        "#15803d",
        "#84cc16",
        "#65a30d",
        "#4ade80",
        "#86efac",
        "#34d399",
        "#10b981",
        "#059669",
      ],
      borderRadius: 10,
    },
  ],
};

const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },

    title: {
      display: true,
      text: "Top 10 Recommended Crops in India",
      font: {
        size: 18,
      },
    },
  },

  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};

export default function TopCropChart() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 h-[500px] flex items-center justify-center">
      <Bar data={data} options={options} />
    </div>
  );
}
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
    "🌾 Rice",
    "🌻 Cotton",
    "🍌 Banana",
    "🥔 Potato",
    "🍅 Tomato",
    "🌿 Groundnut",
  ],

  datasets: [
    {
      label: "Rainfall Requirement (mm)",
      data: [1200, 700, 1500, 600, 800, 550],

      backgroundColor: [
        "#22c55e",
        "#84cc16",
        "#16a34a",
        "#facc15",
        "#fb923c",
        "#3b82f6",
      ],

      borderRadius: 12,
    },
  ],
};

const options = {
  indexAxis: "y",

  responsive: true,

  plugins: {
    title: {
      display: true,
      text: "🌧 Rainfall Requirement of Major Crops",
      font: {
        size: 18,
      },
    },

    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Rainfall (mm)",
      },
    },
  },
};

export default function RainfallChart() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
}
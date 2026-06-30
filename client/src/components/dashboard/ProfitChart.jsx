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
    "🍌 Banana",
    "☕ Coffee",
    "🌾 Rice",
    "🌿 Cotton",
    "🍍 Pineapple",
    "🌶 Pepper",
    "🥭 Mango",
    "🌾 Sugarcane",
  ],

  datasets: [
    {
      label: "Profitability (%)",
      data: [98, 95, 91, 88, 86, 84, 82, 80],

      backgroundColor: [
        "#16a34a",
        "#84cc16",
        "#22c55e",
        "#65a30d",
        "#10b981",
        "#facc15",
        "#fb923c",
        "#38bdf8",
      ],

      borderRadius: 12,
    },
  ],
};

const options = {
  responsive: true,

  plugins: {

    title: {
      display: true,
      text: "💰 Most Profitable Crops",
      font: {
        size: 20,
      },
    },

    legend: {
      display: false,
    },

  },

  scales: {

    y: {

      beginAtZero: true,

      max: 100,

    },

  },

};

export default function ProfitChart() {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6 h-[500px] flex items-center justify-center">
      <Bar

        data={data}

        options={options}

      />

    </div>

  );

}
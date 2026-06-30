import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "10°C",
    "15°C",
    "20°C",
    "25°C",
    "30°C",
    "35°C",
    "40°C",
  ],

  datasets: [
    {
      label: "Suitable Crop Score",
      data: [25, 45, 70, 95, 88, 60, 30],
      borderColor: "#16a34a",
      backgroundColor: "#22c55e",
      fill: false,
      tension: 0.4,
      pointRadius: 6,
      pointHoverRadius: 8,
    },
  ],
};

const options = {
  responsive: true,

  plugins: {
    title: {
      display: true,
      text: "🌡️ Temperature Suitability Analysis",
      font: {
        size: 18,
      },
    },

    legend: {
      position: "bottom",
    },
  },

  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};

export default function TemperatureChart() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <Line data={data} options={options} />
    </div>
  );
}
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "🟤 Loamy Soil",
    "⚫ Black Soil",
    "🔴 Red Soil",
    "🟡 Sandy Loam",
    "🟫 Clay Loam",
    "🟢 Alluvial Soil",
  ],

  datasets: [
    {
      label: "Soil Distribution",

      data: [32, 18, 15, 12, 10, 13],

      backgroundColor: [
        "#8B5A2B",
        "#374151",
        "#DC2626",
        "#FACC15",
        "#A16207",
        "#16A34A",
      ],

      borderColor: "#ffffff",

      borderWidth: 3,

      hoverOffset: 15,
    },
  ],
};

const options = {

  responsive: true,

  plugins: {

    title: {
      display: true,
      text: "🌱 Soil Type Distribution",
      font: {
        size: 18,
      },
    },

    legend: {

      position: "bottom",

      labels: {

        font: {

          size: 13,

        },

      },

    },

  },

};

export default function SoilChart() {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6">

      <Doughnut

        data={data}

        options={options}

      />

    </div>

  );

}
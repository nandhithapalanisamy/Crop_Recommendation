import React from "react";
import {
  Sun,
  CloudRain,
  Thermometer,
  Droplets,
} from "lucide-react";

export default function WeatherSummary() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-green-700 mb-6">
        🌤 Weather Summary
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between items-center bg-orange-50 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <Thermometer className="text-orange-500" />
            <span className="font-medium">
              Temperature
            </span>
          </div>

          <span className="font-bold text-lg">
            28°C
          </span>
        </div>

        <div className="flex justify-between items-center bg-blue-50 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <Droplets className="text-blue-600" />
            <span className="font-medium">
              Humidity
            </span>
          </div>

          <span className="font-bold text-lg">
            72%
          </span>
        </div>

        <div className="flex justify-between items-center bg-cyan-50 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <CloudRain className="text-cyan-600" />
            <span className="font-medium">
              Rainfall
            </span>
          </div>

          <span className="font-bold text-lg">
            850 mm
          </span>
        </div>

        <div className="flex justify-between items-center bg-yellow-50 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <Sun className="text-yellow-500" />
            <span className="font-medium">
              Season
            </span>
          </div>

          <span className="font-bold text-lg">
            Monsoon
          </span>
        </div>

      </div>

    </div>
  );
}
import React from "react";

export default function WeatherAnalysis({ inputSummary, details }) {
  if (!inputSummary || !details) return null;

  const rows = [
    {
      label: "Temperature",
      yours: `${inputSummary.temperature}°C`,
      ideal: `${details.temp_min}°C - ${details.temp_max}°C`,
    },
    {
      label: "Humidity",
      yours: `${inputSummary.humidity}%`,
      ideal: "60% - 85%",
    },
    {
      label: "Rainfall",
      yours: `${inputSummary.rainfall} mm`,
      ideal: "100 - 300 mm",
    },
    {
      label: "Soil pH",
      yours: `${inputSummary.pH}`,
      ideal: `${details.ph_min} - ${details.ph_max}`,
    },
  ];

  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-stone-800 mb-4">
        Weather Compatibility
      </h2>

      <div className="divide-y divide-stone-100">
        <div className="grid grid-cols-3 pb-3 text-xs uppercase tracking-wide text-stone-400 font-semibold">
          <span>Condition</span>
          <span>Your Input</span>
          <span>Ideal Range</span>
        </div>

        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-3 py-4 items-center"
          >
            <span className="font-medium text-stone-700">
              {row.label}
            </span>

            <span className="text-stone-700">
              {row.yours}
            </span>

            <span className="text-green-700 font-medium">
              {row.ideal}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
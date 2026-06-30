import React from "react";
import cropImage from "../assets/crop.png";

export default function CropDetails({ cropName, details }) {
  if (!details) return null;

  const infoItems = [
    {
      label: "Growth Duration",
      value: `${details.growth_days || "--"} days`,
    },
    {
      label: "Water Requirement",
      value: details.water_need || "--",
    },
    {
      label: "Soil Type",
      value: details.soil_type || "--",
    },
    {
      label: "Ideal Temperature",
      value:
        details.temp_min && details.temp_max
          ? `${details.temp_min}°C - ${details.temp_max}°C`
          : "--",
    },
    {
      label: "Ideal Rainfall",
      value: "100 - 300 mm",
    },
    {
      label: "Expected Yield",
      value: details.yield_per_acre
        ? `${details.yield_per_acre} tons/acre`
        : "--",
    },
  ];

  return (
    <section className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm">
      <div className="md:flex">

        {/* Image */}
        <div className="md:w-2/5 h-64 md:h-auto bg-stone-100 overflow-hidden">
          <img
            src={cropImage}
            alt="Crop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Crop Information */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-stone-800">
            {cropName}
          </h2>

          <p className="text-lg text-green-700 mb-8">
            {details.category}
          </p>

          <div className="grid grid-cols-2 gap-y-8 gap-x-12">
            {infoItems.map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">
                  {item.label}
                </p>

                <p className="text-lg font-semibold text-stone-800">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
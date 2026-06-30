import React from "react";
import { Leaf, Sprout, CloudSun } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white p-8 shadow-xl">

      <div className="flex flex-col lg:flex-row justify-between items-center">

        <div>

          <h1 className="text-5xl font-extrabold">
            🌾 Smart Farmer Dashboard
          </h1>

          <p className="mt-4 text-lg text-green-100 max-w-2xl">
            AI-powered agricultural analytics platform providing
            crop insights, seasonal recommendations, soil analysis,
            climate suitability and profitability trends across India.
          </p>

          <div className="flex gap-6 mt-8">

            <div className="flex items-center gap-2">
              <Leaf />
              <span>150 Crops</span>
            </div>

            <div className="flex items-center gap-2">
              <Sprout />
              <span>10 Categories</span>
            </div>

            <div className="flex items-center gap-2">
              <CloudSun />
              <span>Climate Analysis</span>
            </div>

          </div>

        </div>

        <div className="text-9xl mt-10 lg:mt-0">
          🌱
        </div>

      </div>

    </div>
  );
}
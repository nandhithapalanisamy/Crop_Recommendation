import React from "react";

export default function DashboardSummary() {
  return (
    <div className="bg-gradient-to-r from-emerald-700 to-green-600 text-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        📋 Dashboard Summary
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div>
          <h3 className="text-4xl">🌾</h3>
          <p className="mt-3 font-semibold">
            150 Crops
          </p>
        </div>

        <div>
          <h3 className="text-4xl">🌍</h3>
          <p className="mt-3 font-semibold">
            28 States
          </p>
        </div>

        <div>
          <h3 className="text-4xl">📊</h3>
          <p className="mt-3 font-semibold">
            10 Categories
          </p>
        </div>

        <div>
          <h3 className="text-4xl">🤖</h3>
          <p className="mt-3 font-semibold">
            AI Powered
          </p>
        </div>

      </div>

    </div>
  );
}
import React from "react";

export default function ProfitAnalysis({ details }) {
  if (!details) return null;

  const badgeStyle = (level) => {
    switch (level) {
      case "High": return "bg-emerald-100 text-emerald-700 border-emerald-300";
      case "Medium": return "bg-amber-100 text-amber-700 border-amber-300";
      case "Low": return "bg-rose-100 text-rose-700 border-rose-300";
      default: return "bg-stone-100 text-stone-600 border-stone-300";
    }
  };

  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-stone-800 mb-1">Profitability & Demand</h2>
      <p className="text-sm text-stone-500 mb-5">
        Based on general market category trends for this crop type.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className={`rounded-xl border px-4 py-4 text-center ${badgeStyle(details.profitability)}`}>
          <p className="text-xs uppercase tracking-wide opacity-80">Profitability</p>
          <p className="text-xl font-bold mt-1">{details.profitability || "—"}</p>
        </div>
        <div className={`rounded-xl border px-4 py-4 text-center ${badgeStyle(details.market_demand)}`}>
          <p className="text-xs uppercase tracking-wide opacity-80">Market Demand</p>
          <p className="text-xl font-bold mt-1">{details.market_demand || "—"}</p>
        </div>
      </div>
      {details.yield_per_acre_tons && (
        <p className="text-sm text-stone-500 mt-4">
          Estimated yield: <span className="font-medium text-stone-700">{details.yield_per_acre_tons} tons/acre</span>
        </p>
      )}
    </section>
  );
}
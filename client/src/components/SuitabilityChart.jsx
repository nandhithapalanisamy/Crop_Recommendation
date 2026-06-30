import React from "react";

export default function SuitabilityChart({ inputSummary, details }) {
  if (!inputSummary || !details) return null;

  const parseRange = (rangeStr, unit) => {
    if (!rangeStr) return null;
    const match = rangeStr.replace(unit, "").trim().split("-").map(Number);
    if (match.length !== 2 || match.some(isNaN)) return null;
    return { min: match[0], max: match[1] };
  };

  const tempRange = parseRange(details.ideal_temperature_range, "C");
  const rainRange = parseRange(details.ideal_rainfall_range, "mm");

  const computeFit = (value, range) => {
    if (!range) return 50;
    const { min, max } = range;
    const mid = (min + max) / 2;
    const span = (max - min) / 2 || 1;
    const distance = Math.abs(value - mid);
    const fit = Math.max(0, 100 - (distance / span) * 100);
    return Math.round(Math.min(100, fit));
  };

  const metrics = [
    {
      label: "Temperature Fit",
      fit: computeFit(inputSummary.temperature, tempRange),
      detail: `${inputSummary.temperature}°C vs ideal ${details.ideal_temperature_range || "—"}`,
    },
    {
      label: "Rainfall Fit",
      fit: computeFit(inputSummary.rainfall, rainRange),
      detail: `${inputSummary.rainfall}mm vs ideal ${details.ideal_rainfall_range || "—"}`,
    },
    {
      label: "Soil Nutrient Balance",
      fit: Math.round(
        100 - (Math.abs(inputSummary.N - inputSummary.P) + Math.abs(inputSummary.P - inputSummary.K)) / 3
      ),
      detail: `N: ${inputSummary.N}, P: ${inputSummary.P}, K: ${inputSummary.K}`,
    },
  ];

  const barColor = (fit) =>
    fit >= 75 ? "bg-emerald-600" : fit >= 45 ? "bg-amber-500" : "bg-rose-500";

  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-stone-800 mb-1">Suitability Analysis</h2>
      <p className="text-sm text-stone-500 mb-5">
        How closely your conditions match this crop's ideal range.
      </p>
      <div className="space-y-5">
        {metrics.map((m) => {
          const fit = Math.max(0, Math.min(100, m.fit));
          return (
            <div key={m.label}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-stone-700">{m.label}</span>
                <span className="text-sm text-stone-500">{fit}%</span>
              </div>
              <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${barColor(fit)}`}
                  style={{ width: `${fit}%` }}
                />
              </div>
              <p className="text-xs text-stone-400 mt-1">{m.detail}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
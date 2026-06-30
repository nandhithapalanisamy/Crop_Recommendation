import React from "react";

export default function PredictionSummary({ predictedCrop, confidence, details }) {
  const confidenceColor =
    confidence >= 80 ? "text-emerald-600" : confidence >= 50 ? "text-amber-600" : "text-rose-600";
  const confidenceLabel =
    confidence >= 80 ? "Strong match" : confidence >= 50 ? "Moderate match" : "Weak match";

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-stone-800 text-white p-8 md:p-10 shadow-xl">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0%, transparent 35%), radial-gradient(circle at 80% 70%, white 0%, transparent 30%)",
        }}
      />
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-emerald-200 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Recommended Crop
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{predictedCrop}</h1>
          {details?.category && <p className="mt-2 text-emerald-100 text-sm">{details.category}</p>}
        </div>
        <div className="flex flex-col items-start md:items-end">
          <div className={`text-4xl font-bold ${confidenceColor} bg-white rounded-xl px-5 py-3 shadow-lg`}>
            {confidence}%
          </div>
          <span className="mt-2 text-emerald-100 text-xs tracking-wide">{confidenceLabel}</span>
        </div>
      </div>
      {details?.farming_tip && (
        <div className="relative mt-6 pt-6 border-t border-emerald-600/40">
          <p className="text-emerald-100 text-sm leading-relaxed">
            <span className="font-semibold text-white">Tip — </span>
            {details.farming_tip}
          </p>
        </div>
      )}
    </div>
  );
}
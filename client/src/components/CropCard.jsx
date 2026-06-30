import React from "react";

export default function CropCard({ crop, confidence, rank, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-left w-full rounded-xl p-4 border transition-all duration-150 ${
        isActive
          ? "border-emerald-600 bg-emerald-50 shadow-md"
          : "border-stone-200 bg-white hover:border-emerald-300 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-stone-400">#{rank}</span>
        {isActive && (
          <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
            Best Match
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-stone-800">{crop}</h3>
      <div className="mt-3">
        <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-600 rounded-full transition-all duration-500"
            style={{ width: `${confidence}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-stone-500">{confidence}% confidence</p>
      </div>
    </button>
  );
}
import React from "react";
import CropCard from "./CropCard";

export default function AlternativeCrops({ top5, selectedCrop, onSelectCrop }) {
  if (!top5 || top5.length === 0) return null;

  return (
    <section>
      <h2 className="text-lg font-semibold text-stone-800 mb-1">Top 5 Recommended Crops</h2>
      <p className="text-sm text-stone-500 mb-4">
        Ranked by how well they match your soil and weather conditions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {top5.map((item, idx) => (
          <CropCard
            key={item.crop}
            crop={item.crop}
            confidence={item.confidence}
            rank={idx + 1}
            isActive={item.crop === selectedCrop}
            onClick={() => onSelectCrop(item.crop)}
          />
        ))}
      </div>
    </section>
  );
}
import React from "react";

export default function LoadingSpinner({ message = "Analyzing soil conditions..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-emerald-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-emerald-600 border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-5 text-stone-500 text-sm tracking-wide">{message}</p>
    </div>
  );
}
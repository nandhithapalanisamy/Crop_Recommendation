import React, { useState } from "react";
import { getCropDetails } from "../services/recommendationApi";
import { useLocation } from "react-router-dom";

import PredictionSummary from "../components/PredictionSummary";
import AlternativeCrops from "../components/AlternativeCrops";
import CropDetails from "../components/CropDetails";
import SuitabilityChart from "../components/SuitabilityChart";
import WeatherAnalysis from "../components/WeatherAnalysis";
import ProfitAnalysis from "../components/ProfitAnalysis";
import DownloadReport from "../components/DownloadReport";
import LoadingSpinner from "../components/LoadingSpinner";


/** Small reusable stat pill used in the quick-stats row below the hero */
function QuickStat({ icon, label, value, accent }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-2xl border border-gray-200 px-5 py-4 shadow-sm hover:shadow-md transition-shadow">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
        style={{ backgroundColor: accent }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
        <p className="text-base font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

/** Section heading with a colored accent bar + icon, used to break up the page */
function SectionHeading({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 mb-1">
      <span className="text-2xl">{icon}</span>
      <div>
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
  );
}
/**
 * Recommendation page — DESIGN PASS ONLY (no live API call yet).
 */
export default function Recommendation() {


  
const location = useLocation();

const result = location.state;

const [viewState] = useState(result ? "result" : "error");

const [selectedCrop, setSelectedCrop] = useState(
  result?.predicted_crop || ""
);

const [selectedDetails, setSelectedDetails] = useState(
  result?.details || null
);
  const handleSelectCrop = async (cropName) => {

  try {

    setSelectedCrop(cropName);

    const response = await getCropDetails(cropName);

    setSelectedDetails(response.details);

  } catch (err) {

    console.log(err);

  }

};

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* ---------------------------------------------------------- */}
        {/* DEV-ONLY state switcher — remove once API is connected     */}
        {/* ---------------------------------------------------------- */}
        <div className="mb-6 flex gap-2 print:hidden">
          {["loading", "error", "result"].map((state) => (
            <button
              key={state}
              onClick={() => setViewState(state)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                viewState === state
                  ? "bg-gray-800 text-white border-gray-800"
                  : "bg-white text-gray-500 border-gray-300"
              }`}
            >
              {state}
            </button>
          ))}
        </div>

        {/* LOADING STATE */}
        {viewState === "loading" && (
          <LoadingSpinner message="Analyzing your soil and climate data..." />
        )}

        {/* ERROR STATE */}
        {viewState === "error" && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-5 text-sm text-red-700 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">⚠️</span>
              <p className="font-semibold">Couldn't get a recommendation</p>
            </div>
            <p>Could not reach the recommendation server. Make sure the Flask backend is running.</p>
            <button className="mt-3 text-red-700 underline text-sm font-medium">
              Go back and try again
            </button>
          </div>
        )}

        {/* RESULT STATE */}
        {viewState === "result" && (
          <div id="printable-report" className="space-y-10">

            {/* Page intro */}
            <div className="text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                ✨ AI-Powered Result
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-3">
                Your Crop Recommendation Is Ready
              </h1>
              <p className="text-gray-500 mt-1 max-w-xl mx-auto sm:mx-0">
                Based on your soil nutrients and climate data, here's what our model
                predicts will grow best — along with detailed insights to back it up.
              </p>
            </div>

            {/* Hero prediction card */}
            <PredictionSummary
              predictedCrop={result?.predicted_crop}
              confidence={result?.confidence}
              details={selectedDetails}
            />

            {/* Quick stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <QuickStat
  icon="🌾"
  label="Category"
  value={selectedDetails?.category || "--"}
  accent="#ECFDF5"
/>

<QuickStat
  icon="💧"
  label="Water Need"
  value={selectedDetails?.water_need || "--"}
  accent="#EFF6FF"
/>

<QuickStat
  icon="📅"
  label="Growth Days"
  value={`${selectedDetails?.growth_days || "--"} Days`}
  accent="#FFFBEB"
/>

<QuickStat
  icon="📈"
  label="Market Demand"
  value={selectedDetails?.market_demand || "--"}
  accent="#FDF2F8"
/>
            </div>

            {/* Top 5 alternatives */}
            <div>
              <SectionHeading
                icon="🏆"
                title="Top 5 Recommended Crops"
                subtitle="Tap any card to preview its details below"
              />
              <div className="mt-4">
                <AlternativeCrops
                  top5={result?.top5}
                  selectedCrop={selectedCrop}
                  onSelectCrop={handleSelectCrop}
                />
              </div>
            </div>

            {/* Crop details */}
            <div>
              <SectionHeading icon="📋" title="Crop Details" subtitle={`Everything you need to know about ${selectedCrop}`} />
              <div className="mt-4">
                <CropDetails cropName={selectedCrop} details={selectedDetails} />
              </div>
            </div>

            {/* Suitability + weather side-by-side */}
            <div>
              <SectionHeading icon="🧪" title="Field Compatibility" subtitle="How well your inputs match this crop's ideal range" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <SuitabilityChart
                 inputSummary={result?.input_summary}
                  details={selectedDetails}
                />
                <WeatherAnalysis
                  inputSummary={result?.input_summary}
                  details={selectedDetails}
                />
              </div>
            </div>

            {/* Profitability */}
            <div>
              <SectionHeading icon="💰" title="Profitability Outlook" subtitle="Estimated returns and market positioning" />
              <div className="mt-4">
                <ProfitAnalysis details={selectedDetails} />
              </div>
            </div>

            {/* Farming tip banner */}
            {selectedDetails?.farming_tip && (
              <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 px-6 py-5 flex gap-4 items-start">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="font-semibold text-amber-800 mb-1">Farming Tip</p>
                  <p className="text-sm text-amber-700">{selectedDetails.farming_tip}</p>
                </div>
              </div>
            )}

            {/* Model transparency footer */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-500 shadow-sm print:hidden">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">🤖</span>
                <p className="font-semibold text-gray-700">About this prediction</p>
              </div>
              <p>
               Generated using a{" "}
<span className="font-medium text-gray-700">
  {result?.model_info?.algorithm || "Extra Trees Classifier"}
</span>{" "}
trained on{" "}
<span className="font-medium text-gray-700">
  {result?.model_info?.total_crop_classes || "--"}
</span>{" "}
crop classes with{" "}
<span className="font-medium text-gray-700">
  {result?.model_info?.features_used || "--"}
</span>{" "}
input features.
              </p>
            </section>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 print:hidden pb-4">
              <DownloadReport predictedCrop={result?.predicted_crop} />
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
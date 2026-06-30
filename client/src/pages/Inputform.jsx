import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCropRecommendation } from "../services/recommendationApi";

const CATEGORIES = [
  "Cash Crops", "Cereals & Grains", "Fiber Crops", "Fodder Crops", "Fruits",
  "Oilseeds", "Plantation Crops", "Pulses & Legumes", "Spices & Herbs", "Vegetables",
];

const Inputform = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
    ph: 0,
    temperature: 0,
    humidity: 0,
    rainfall: 0,
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async () => {

  const apiPayload = {

    N: Number(formData.nitrogen),
    P: Number(formData.phosphorus),
    K: Number(formData.potassium),
    temperature: Number(formData.temperature),
    humidity: Number(formData.humidity),
    pH: Number(formData.ph),
    rainfall: Number(formData.rainfall),
    category: formData.category

  };

  try {

    const result = await getCropRecommendation(apiPayload);

    navigate("/recommendation", {
      state: result,
    });

  }

  catch(err){

    alert(err.message);

  }

};

  const handleReset = () => {
    setFormData({
      nitrogen: 0,
      phosphorus: 0,
      potassium: 0,
      ph: 0,
      temperature: 0,
      humidity: 0,
      rainfall: 0,
      category: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2 text-green-700">
          Crop Recommendation
        </h1>

        <p className="text-gray-600 mb-6">
          Enter your soil and climate details to get the best crop suggestion.
        </p>

        {/* Soil Nutrients */}
        <div className="mb-8">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            🌱 Soil Nutrients
          </span>

          <h2 className="font-bold text-lg mt-4 mb-4">NUTRIENT LEVELS</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Nitrogen */}
            <div>
              <label className="font-medium">
                Nitrogen (N) <span className="text-gray-500">kg/ha</span>
              </label>

              <div className="flex items-center gap-3 mt-2">
                <input
                  type="range"
                  min="0"
                  max="200"
                  name="nitrogen"
                  value={formData.nitrogen}
                  onChange={handleChange}
                   className="w-full accent-green-400 "
                />
                <span>{formData.nitrogen}</span>
              </div>

              <input
                type="number"
                name="nitrogen"
                value={formData.nitrogen}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-2"
              />

              <p className="text-sm text-gray-500 mt-1">
                Typical range: 0 – 200 kg/ha
              </p>
            </div>

            {/* Phosphorus */}
            <div>
              <label className="font-medium">
                Phosphorus (P) <span className="text-gray-500">kg/ha</span>
              </label>

              <div className="flex items-center gap-3 mt-2">
                <input
                  type="range"
                  min="0"
                  max="150"
                  name="phosphorus"
                  value={formData.phosphorus}
                  onChange={handleChange}
                  className="w-full accent-green-400 "
                />
                <span>{formData.phosphorus}</span>
              </div>

              <input
                type="number"
                name="phosphorus"
                value={formData.phosphorus}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-2"
              />

              <p className="text-sm text-gray-500 mt-1">
                Typical range: 0 – 150 kg/ha
              </p>
            </div>

            {/* Potassium */}
            <div>
              <label className="font-medium">
                Potassium (K) <span className="text-gray-500">kg/ha</span>
              </label>

              <div className="flex items-center gap-3 mt-2">
                <input
                  type="range"
                  min="0"
                  max="220"
                  name="potassium"
                  value={formData.potassium}
                  onChange={handleChange}
                 className="w-full accent-green-400 "
                />
                <span>{formData.potassium}</span>
              </div>

              <input
                type="number"
                name="potassium"
                value={formData.potassium}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-2"
              />

              <p className="text-sm text-gray-500 mt-1">
                Typical range: 0 – 220 kg/ha
              </p>
            </div>
          </div>

          {/* Soil pH */}
          <div className="mt-6 w-full md:w-1/3">
            <label className="font-medium">Soil pH</label>

            <div className="flex items-center gap-3 mt-2">
              <input
                type="range"
                min="0"
                max="14"
                step="0.1"
                name="ph"
                value={formData.ph}
                onChange={handleChange}
                className="w-full accent-green-400 "
              />
              <span>{formData.ph}</span>
            </div>

            <input
              type="number"
              step="0.1"
              name="ph"
              value={formData.ph}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-2"
            />

            <p className="text-sm text-gray-500 mt-1">
              Scale: 0 (acidic) – 14 (alkaline)
            </p>
          </div>
        </div>

        <hr className="my-8" />

        {/* Climate Conditions */}
        <div>
          <span className="text-white-300 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            ☁ Climate Conditions
          </span>

          <h2 className="font-bold text-lg mt-4 mb-4">
            WEATHER & ENVIRONMENT
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Temperature */}
            <div>
              <label className="font-medium">Temperature °C</label>

              <div className="flex items-center gap-3 mt-2">
                <input
                  type="range"
                  min="0"
                  max="50"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleChange}
                  className="w-full accent-green-400 "
                />
                <span>{formData.temperature}</span>
              </div>

              <input
                type="number"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-2"
              />

              <p className="text-sm text-gray-500 mt-1">
                Average growing temperature
              </p>
            </div>

            {/* Humidity */}
            <div>
              <label className="font-medium">Humidity %</label>

              <div className="flex items-center gap-3 mt-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  name="humidity"
                  value={formData.humidity}
                  onChange={handleChange}
                  className="w-full accent-green-400 "
                />
                <span>{formData.humidity}</span>
              </div>

              <input
                type="number"
                name="humidity"
                value={formData.humidity}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-2"
              />

              <p className="text-sm text-gray-500 mt-1">
                Relative humidity
              </p>
            </div>

            {/* Rainfall */}
            <div>
              <label className="font-medium">Rainfall mm</label>

              <div className="flex items-center gap-3 mt-2">
                <input
                  type="range"
                  min="0"
                  max="300"
                  name="rainfall"
                  value={formData.rainfall}
                  onChange={handleChange}
                  className="w-full accent-green-400 "
                />
                <span>{formData.rainfall}</span>
              </div>

              <input
                type="number"
                name="rainfall"
                value={formData.rainfall}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-2"
              />

              <p className="text-sm text-gray-500 mt-1">
                Average monthly rainfall
              </p>
            </div>
          </div>
        </div>

        <hr className="my-8" />

        {/* Crop Category (new) */}
        <div>
          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
            🌾 Crop Category
          </span>

          <h2 className="font-bold text-lg mt-4 mb-4">
            PREFERRED CATEGORY (OPTIONAL)
          </h2>

          <div className="w-full md:w-1/3">
            <label className="font-medium">Crop Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 mt-2"
            >
              <option value="">No preference</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <p className="text-sm text-gray-500 mt-1">
              Narrows recommendations to a specific crop type
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            🔍 Get Recommendation
          </button>

          <button
            onClick={handleReset}
            className="bg-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400"
          >
            ↺ Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputform;
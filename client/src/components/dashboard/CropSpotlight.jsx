import React from "react";
import cropImage from "../../assets/crop.png";
import {
  Star,
  TrendingUp,
  Droplets,
  Thermometer,
  Leaf,
} from "lucide-react";

export default function CropSpotlight() {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

      <div className="md:flex">

        {/* Crop Image */}
        <div className="md:w-2/5">
          <img
            src={cropImage}
            alt="Crop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Crop Details */}
        <div className="flex-1 p-8">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            🌟 Crop Spotlight
          </span>

          <h1 className="text-4xl font-bold mt-5 text-green-700">
            🌾 Rice
          </h1>

          <p className="text-gray-500 mt-2">
            One of India's most important food crops with excellent
            productivity under tropical and subtropical climates.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-8">

            <div className="flex items-center gap-3">
              <Star className="text-yellow-500" />
              <div>
                <p className="text-gray-500 text-sm">Rating</p>
                <h3 className="font-bold">
                  ⭐⭐⭐⭐⭐
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <TrendingUp className="text-green-600" />
              <div>
                <p className="text-gray-500 text-sm">
                  Profitability
                </p>
                <h3 className="font-bold">
                  Very High
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Droplets className="text-blue-600" />
              <div>
                <p className="text-gray-500 text-sm">
                  Water Need
                </p>
                <h3 className="font-bold">
                  High
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Thermometer className="text-red-500" />
              <div>
                <p className="text-gray-500 text-sm">
                  Temperature
                </p>
                <h3 className="font-bold">
                  20°C - 35°C
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Leaf className="text-green-600" />
              <div>
                <p className="text-gray-500 text-sm">
                  Soil
                </p>
                <h3 className="font-bold">
                  Clay Loam
                </h3>
              </div>
            </div>

          </div>


        </div>

      </div>

    </div>
  );
}
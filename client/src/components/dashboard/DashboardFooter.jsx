import React from "react";
import {
  Download,
  Printer,
  Leaf,
  Mail,
  Globe,
  Calendar,
} from "lucide-react";

export default function DashboardFooter() {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-emerald-600 rounded-3xl shadow-xl text-white p-8 mt-8">

      <div className="grid lg:grid-cols-3 gap-8">

        {/* CropAI Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Leaf size={34} />
            <h2 className="text-3xl font-bold">
              Smart Farmer
            </h2>
          </div>

          <p className="leading-7 text-green-100">
            CropAI is an intelligent crop recommendation dashboard
            that helps farmers understand crop suitability,
            weather conditions, soil characteristics and market
            trends using Machine Learning.
          </p>
        </div>

        {/* Dataset Statistics */}
        <div>

          <h2 className="text-2xl font-bold mb-5">
            📊 Dashboard Statistics
          </h2>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>🌾 Total Crops</span>
              <span className="font-bold">150</span>
            </div>

            <div className="flex justify-between">
              <span>🌱 Categories</span>
              <span className="font-bold">10</span>
            </div>

            <div className="flex justify-between">
              <span>📂 Dataset Records</span>
              <span className="font-bold">25,000+</span>
            </div>

            <div className="flex justify-between">
              <span>🌍 States Covered</span>
              <span className="font-bold">28</span>
            </div>

            <div className="flex justify-between">
              <span>🤖 ML Algorithm</span>
              <span className="font-bold">
                Extra Trees
              </span>
            </div>

          </div>

        </div>

        {/* Buttons */}
        <div>

          <h2 className="text-2xl font-bold mb-5">
            ⚙ Dashboard Actions
          </h2>

          <div className="space-y-4">


            <button
              onClick={() => window.print()}
              className="w-full bg-white text-green-700 py-3 rounded-xl font-semibold hover:bg-green-100 transition flex justify-center items-center gap-2"
            >
              <Printer size={20} />
              Print Dashboard
            </button>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-green-400 mt-8 pt-6">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">

          <div className="flex items-center gap-3">

            <Calendar size={18} />

            <span>
              Last Updated :
              {" "}
              {new Date().toLocaleDateString()}
            </span>

          </div>

          <div className="flex items-center gap-6">

            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>support@smartfarmer.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Globe size={18} />
              <span>www.smartfarmer.com</span>
            </div>

          </div>

        </div>

        <p className="text-center mt-6 text-green-100">
          Thank you for your time. Cultivating innovation today for a greener tomorrow. 🌱
        </p>

      </div>

    </footer>
  );
}
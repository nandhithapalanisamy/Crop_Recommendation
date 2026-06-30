
import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
              🌱 AI Powered Agriculture
            </span>

            <h1 className="mt-6 text-5xl font-bold text-gray-800 leading-tight">
              Smart Crop
              <span className="text-green-600"> Recommendation </span>
              System
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Discover the most suitable crops based on soil nutrients,
              weather conditions, rainfall, humidity, and temperature
              using Machine Learning.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                to="/signin"
                className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700"
              >
                Get Started
              </Link>

              <Link
                to="/signup"
                className="border border-green-600 text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-50"
              >
                Create Account
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="flex items-center gap-2">
                🤖 <span>AI Based Analysis</span>
              </div>

              <div className="flex items-center gap-2">
                🌦️ <span>Weather Insights</span>
              </div>

              <div className="flex items-center gap-2">
                🌱 <span>Soil Monitoring</span>
              </div>

              <div className="flex items-center gap-2">
                📈 <span>High Accuracy</span>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800"
              alt="Farm"
              className="rounded-3xl shadow-lg h-64 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800"
              alt="Crop"
              className="rounded-3xl shadow-lg h-64 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
              alt="Agriculture"
              className="rounded-3xl shadow-lg h-64 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800"
              alt="Farmer"
              className="rounded-3xl shadow-lg h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Why Choose Smart Farmer?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-md text-center">
            <div className="text-5xl mb-3">🌾</div>
            <h3 className="font-bold">Crop Analysis</h3>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md text-center">
            <div className="text-5xl mb-3">☁️</div>
            <h3 className="font-bold">Weather Based</h3>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md text-center">
            <div className="text-5xl mb-3">📊</div>
            <h3 className="font-bold">Smart Dashboard</h3>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md text-center">
            <div className="text-5xl mb-3">⚡</div>
            <h3 className="font-bold">Fast Prediction</h3>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-green-600 text-white rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold">95%</h3>
            <p>Accuracy</p>
          </div>

          <div className="bg-emerald-600 text-white rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold">100+</h3>
            <p>Crops</p>
          </div>

          <div className="bg-lime-600 text-white rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold">24/7</h3>
            <p>Support</p>
          </div>

          <div className="bg-green-700 text-white rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold">500+</h3>
            <p>Predictions</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Intro;

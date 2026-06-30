import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
              🌱 Smart Agriculture Solution
            </span>

            <h1 className="mt-6 text-5xl font-bold text-gray-800 leading-tight">
              AI Powered Crop
              <span className="text-green-600"> Recommendation </span>
              System
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Get the best crop recommendations based on soil nutrients,
              weather conditions and farm parameters using Machine Learning.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/inputform"
                className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                Get Started
              </Link>

              <Link
                to="/dashboard"
                className="border border-green-600 text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition"
              >
                View Dashboard
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000"
              alt="Agriculture"
              className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Explore Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Input Form */}
          <Link
            to="/inputform"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <div className="text-6xl text-center mb-4">
              🌾
            </div>

            <h3 className="text-2xl font-bold text-center text-gray-800">
              Input Form
            </h3>

            <p className="text-center text-gray-500 mt-4">
              Enter soil nutrients, rainfall, humidity,
              temperature and pH values.
            </p>
          </Link>

          {/* Recommendation */}
          <Link
            to="/recommendation"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <div className="text-6xl text-center mb-4">
              📈
            </div>

            <h3 className="text-2xl font-bold text-center text-gray-800">
              Recommendation
            </h3>

            <p className="text-center text-gray-500 mt-4">
              View AI generated crop recommendations
              with prediction confidence.
            </p>
          </Link>

          {/* Dashboard */}
          <Link
            to="/dashboard"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <div className="text-6xl text-center mb-4">
              📊
            </div>

            <h3 className="text-2xl font-bold text-center text-gray-800">
              Dashboard
            </h3>

            <p className="text-center text-gray-500 mt-4">
              Analyze prediction history,
              crop trends and statistics.
            </p>
          </Link>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Why Choose Smart Farmer?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center">
              <div className="text-5xl mb-3">🤖</div>
              <h3 className="font-semibold">
                AI Powered
              </h3>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3">🌱</div>
              <h3 className="font-semibold">
                Soil Analysis
              </h3>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3">☁️</div>
              <h3 className="font-semibold">
                Weather Based
              </h3>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3">⚡</div>
              <h3 className="font-semibold">
                Fast Prediction
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-green-600 text-white rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold">
              95%
            </h2>
            <p className="mt-2">
              Prediction Accuracy
            </p>
          </div>

          <div className="bg-emerald-600 text-white rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold">
              100+
            </h2>
            <p className="mt-2">
              Crop Types
            </p>
          </div>

          <div className="bg-green-700 text-white rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold">
              500+
            </h2>
            <p className="mt-2">
              Predictions Generated
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
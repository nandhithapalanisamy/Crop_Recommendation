import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/");
};

  return (
    <nav className="bg-white shadow fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <Link
            to="/"
            className="flex items-center gap-2"
        >
        <span className="text-3xl">🌱</span>

        <div>
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Smart Farmer
        </h1>

        <p className="text-xs text-gray-700 tracking-wider">
            Smart Crop Recommendation
        </p>
        </div>
        </Link>

        {token ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/signin"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
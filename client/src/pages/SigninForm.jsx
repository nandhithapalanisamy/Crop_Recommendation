import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SigninForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");
      localStorage.setItem("token", response.data.token);
      navigate("/home");

      setEmail("");
      setPassword("");

    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-green-200 flex justify-center items-center px-10 py-10">
    
    <div className="w-full max-w-2xl bg-white rounded-3xl p-20 shadow-2xl">

      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-3">🌱</div>

        <h1 className="text-4xl font-bold text-gray-800">
          Welcome Back
        </h1>

        <p className="text-gray-500 mt-2">
          Login to Crop Recommendation System
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Email */}
        <div>
          <label className="block mb-2 text-green-700 font-semibold">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
            w-full
            px-4
            py-4
            border
            border-gray-300
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-green-500
            transition
            "
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 text-green-700 font-semibold">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
            w-full
            px-4
            py-4
            border
            border-gray-300
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-green-500
            transition
            "
          />
        </div>

        {/* Remember Me */}
        <div className="flex justify-between items-center">
          <label className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              className="accent-green-600"
            />
            Remember Me
          </label>

          <button
            type="button"
            className="text-green-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="
          w-full
          bg-gradient-to-r
          from-green-500
          to-emerald-600
          text-white
          font-semibold
          py-4
          rounded-xl
          shadow-lg
          hover:from-green-600
          hover:to-emerald-700
          hover:scale-[1.02]
          transition-all
          duration-300
          "
        >
          Login
        </button>
        
        <div className="text-center mt-4">
        <p className="text-gray-600">
          Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-green-600 font-semibold hover:underline"
        >
        Create New Account
        </Link>
      </p>
      </div>

      </form>
    </div>
  </div>
)};
export default SigninForm;
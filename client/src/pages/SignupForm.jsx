import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignupForm = ({ switchToSignin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          username,
          email,
          password,
        }
      );

      alert(response.data.message);

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

       
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong"
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
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Join Crop Recommendation System
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Username */}
          <div>
            <label className="block mb-2 text-green-700 font-semibold">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              className="
              w-full
              px-4
              py-3
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
              py-3
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
              py-3
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

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-green-700 font-semibold">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              className="
              w-full
              px-4
              py-3
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

          {/* Button */}
          <button
            type="submit"
            className="
            w-full
            bg-gradient-to-r
            from-green-500
            to-emerald-600
            text-white
            font-semibold
            py-3
            rounded-xl
            hover:from-green-600
            hover:to-emerald-700
            transition-all
            duration-300
            shadow-lg
            "
          >
            Create Account
          </button>

          {/* Sign In Link */}
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-green-600 font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>

      </div>
    </div>
  );
};

export default SignupForm;